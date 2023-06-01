import * as amqp from 'amqplib';

class Publisher {
	private channel: amqp.Channel;
	private queueName: string;

	constructor(channel: amqp.Channel, quename: string) {
		this.channel = channel;
		this.queueName = quename;
	}

	async publish(message: string): Promise<void> {
		await this.channel.assertQueue(this.queueName);
		this.channel.sendToQueue(this.queueName, Buffer.from(message));
		console.log('Message sent:', message);
	}
}

class Subscriber {
	private channel: amqp.Channel;
	private queueName: string;

	constructor(channel: amqp.Channel, quename: string) {
		this.channel = channel;
		this.queueName = quename;
	}

	async subscribe(): Promise<void> {
		await this.channel.assertQueue(this.queueName);
		this.channel.consume(this.queueName, (msg) => {
			if (msg !== null) {
				console.log('Message received:', msg.content.toString());
				this.channel.ack(msg);
			}
		});
	}
}

async function main(messages: string[]): Promise<void> {
	const queueName = 'myQueue';
	const connection = await amqp.connect('amqp://localhost:5672');
	const channel = await connection.createChannel();

	const publisher = new Publisher(channel, queueName);
	const subscriber = new Subscriber(channel, queueName);

	for (const message of messages) {
		console.log('Publishing message:', message);
		await publisher.publish(message);
	}

	await subscriber.subscribe();
}

// main([ 'Hello Rabbit', 'Nice to see you running', 'Goodbye!' ]).catch(console.error);

export { Publisher, Subscriber, main };
