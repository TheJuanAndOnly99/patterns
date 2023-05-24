import { EventEmitter } from 'events';
import User from './user';

class Topic extends EventEmitter {
  constructor(public name: string,
    public messages: string[] = [], 
    public users: User[] = []) {
    super();
  }

  public addMessage(message: string): void {
    this.messages.push(message);
    console.log(`[${this.name}] New message: ${message}`);
    this.emit('message', message);
  }

  public addUser(user: User): void {
    this.users.push(user);
  }
}

// Creating Users
const john = new User('john');
const alex = new User('alex');

// Creating Topics
const topic1 = new Topic('News');
const topic2 = new Topic('Sports');

// Subscribing Users to Topics
john.subscribeUserToTopic(topic1);
john.subscribeUserToTopic(topic2);
alex.subscribeUserToTopic(topic2);

// Adding messages to Topics
topic1.addMessage('In today\'s news...');
topic2.addMessage('Goal! Argentina 1 - 0 Brazil');

export default Topic;
