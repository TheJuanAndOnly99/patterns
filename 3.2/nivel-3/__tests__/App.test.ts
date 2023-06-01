import * as amqp from 'amqplib';
import { Subscriber, Publisher, main } from '../src/App';

describe('RabbitMQ Publish/Subscribe Tests', () => {
	let connection: amqp.Connection;
	let channel: amqp.Channel;
	let subscriber: Subscriber;
	let publisher: Publisher;

	beforeAll(async () => {
		connection = await amqp.connect('amqp://localhost:5672');
		channel = await connection.createChannel();
		console.log(`Connection created: ${connection}`);
		console.log(`Channel created: ${channel}`);
		const queueName = 'myQueue';
		publisher = new Publisher(channel, queueName);
		subscriber = new Subscriber(channel, queueName);
		console.log(`publisher: ${publisher}`);
	});

	afterAll(async () => {
		await channel.close();
		await connection.close();
	});

	beforeEach(async () => {
		// Clear the queue before each test
		await channel.purgeQueue('myQueue');
	});

	test('Publish and Subscribe', async () => {
		const messages = [ 'Message 1', 'Message 2', 'Message 3' ];
		const receivedMessages: string[] = [];

		await subscriber.subscribe();
		channel.consume('myQueue', (msg) => {
			if (msg !== null) {
				receivedMessages.push(msg.content.toString());
				channel.ack(msg);
			}
		});

		await main(messages);

		await new Promise((resolve) => setTimeout(resolve, 500));

		expect(receivedMessages).toEqual(messages);
	});
});
