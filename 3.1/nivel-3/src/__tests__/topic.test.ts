import Topic from '../topic';
import User from '../user';


describe('Topic', () => {
  it('should emit a message when a new message is added', (done) => {
    const topic = new Topic('Test Topic');
    const message = 'Test message';

    topic.on('message', (msg) => {
      expect(msg).toBe(message);
      done();
    });

    topic.addMessage(message);
  });
});

describe('Topic', () => {
  it('should subscribe a user to a topic', (done) => {
    const topic = new Topic('Test Topic');
    const message = 'Test message';
    const user = new User('user');

    const consoleLogSpy = jest.spyOn(console, 'log');

    topic.on('message', (message) => {
      console.log(`[${user.name}] Received message: ${message}`);
    });

    topic.addMessage(message);

    expect(consoleLogSpy).toHaveBeenCalledWith(`[${user.name}] Received message: ${message}`);
    consoleLogSpy.mockRestore();
    done();
  });
});