import * as amqp from 'amqplib';
import { Publisher, Subscriber } from '../src/App';

describe('Publisher', () => {
	let channel: amqp.Channel;
	let publisher: Publisher;

	beforeEach(async () => {
		channel = await amqp.connect('amqp://localhost:5672').then((conn) => conn.createChannel());
		publisher = new Publisher(channel, 'myQueue');
	});

	afterEach(async () => {
		await channel.close();
	});

	test('publish method should send a message to the queue', async () => {
		const message = 'Test message';
		const assertQueueSpy = jest.spyOn(channel, 'assertQueue');
		const sendToQueueSpy = jest.spyOn(channel, 'sendToQueue');
		const consoleLogSpy = jest.spyOn(console, 'log');

		await publisher.publish(message);

		expect(assertQueueSpy).toHaveBeenCalledWith('myQueue');
		expect(sendToQueueSpy).toHaveBeenCalledWith('myQueue', Buffer.from(message));
		expect(consoleLogSpy).toHaveBeenCalledWith('Message sent:', message);
	});
});

describe('Subscriber', () => {
	let channel: amqp.Channel;
	let subscriber: Subscriber;

	beforeEach(async () => {
		channel = await amqp.connect('amqp://localhost:5672').then((conn) => conn.createChannel());
		subscriber = new Subscriber(channel, 'myQueue');
	});

	afterEach(async () => {
		await channel.close();
	});

	test('subscribe method should consume messages from the queue', async () => {
		const assertQueueSpy = jest.spyOn(channel, 'assertQueue');
		const consumeSpy = jest.spyOn(channel, 'consume');
		const consoleLogSpy = jest.spyOn(console, 'log');

		await subscriber.subscribe();

		expect(assertQueueSpy).toHaveBeenCalledWith('myQueue');
		expect(consumeSpy).toHaveBeenCalledWith('myQueue', expect.any(Function));
		expect(consoleLogSpy).toHaveBeenCalledWith('Message received:', 'Test message');
	});
});
