import { Player } from "../player";

describe('Player', () => {
  let player: Player;

  beforeEach(() => {
    player = new Player('Player 1');
  });

  // Test that Player has the correct name
  describe('name', () => {
    it('should return the correct name', () => {
      expect(player.name).toBe('Player 1');
    });
  });

  // Test that Player has the correct score
  describe('score', () => {
    it('should return the correct score', () => {
      expect(player.score).toBe(0);
    });
  });
});