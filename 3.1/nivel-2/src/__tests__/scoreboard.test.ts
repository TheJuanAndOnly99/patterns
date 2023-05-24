import { Scoreboard } from '../scoreboard';

describe('Scoreboard', () => {
  let scoreboard: Scoreboard;

  beforeEach(() => {
    scoreboard = Scoreboard.getInstance();
  });

  afterEach(() => {
    scoreboard.resetScoreboard();
  });

  // Test that Scoreboard follows the Singleton pattern
  describe('Scoreboard', () => {
    it('should return the same instance when called multiple times', () => {
      const instance1 = Scoreboard.getInstance();
      const instance2 = Scoreboard.getInstance();
  
      expect(instance1).toBe(instance2);
    });
  });

  // Test that updateScoreboard returns the correct string
  describe('updateScoreboard', () => {
    it('should return the correct string', () => {
      const players = [
        { name: 'Player 1', score: 10 },
        { name: 'Player 2', score: 20 },
        { name: 'Player 3', score: 30 },
      ];
      const result = scoreboard.updateScoreboard(players);
  
      expect(result).toBe('The winner is: Player 3 with 30 points');
    });
  });

  // Test that updateScoreboard returns the correct string when no players are available
  describe('updateScoreboard', () => {
    it('should return the correct string when no players are available', () => {
      const players: any = [];
      const result = scoreboard.updateScoreboard(players);
  
      expect(result).toBe('No players available.');
    });
  });

  // Test that resetScoreboard resets the instance
  describe('resetScoreboard', () => {
    it('should reset the instance', () => {
      const instance1 = Scoreboard.getInstance();
      scoreboard.resetScoreboard();
      const instance2 = Scoreboard.getInstance();
  
      expect(instance1).not.toBe(instance2);
    });
  });
});
