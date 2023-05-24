import Topic from "./topic";

class User {
  constructor(public name: string) {}

  subscribeUserToTopic(topic: Topic): void {
    topic.addUser(this);
    topic.on('message', (message) => {
      console.log(`[${this.name}] Received message: ${message}`);
    });
  }
}

export default User;