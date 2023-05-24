import { Player } from "../player";
import { Scoreboard } from "../scoreboard";
import { Game } from "../game";

describe('Game', () => {
  let game: Game;
  let players: Player[];
  let scoreboard: Scoreboard;

  beforeEach(() => {
    game = new Game();
    players = [
      { name: 'Player 1', score: 10 },
      { name: 'Player 2', score: 20 },
      { name: 'Player 3', score: 30 },
    ];
    scoreboard = Scoreboard.getInstance();

    players.forEach((player) => game.addPlayer(player.name));
    players.forEach((player) => game.addPoints(player.name, player.score));
  });

  // Test that Game has the correct players
  describe('players', () => {
    it('should return the correct players', () => {
      expect(game.players).toEqual(players);
    });
  });

  // Test that Game has the correct scoreboard
  describe('scoreboard', () => {
    it('should return the correct scoreboard', () => {
      expect(game.scoreboard).toEqual(scoreboard);
    });
  });

  // Test that Game can add a player
  describe('addPlayer', () => {
    it('should add a player', () => {
      const player = { name: 'Player 4', score: 0 };
      game.addPlayer(player.name);
      expect(game.players).toContainEqual(player);
    });
  });

  // Test that Game can add points to a player
  describe('addPoints', () => {
    it('should add points to a player', () => {
      const name = 'Player 1';
      const points = 10;
      game.addPoints(name, points);
      expect(game.players[0].score).toEqual(20);
    });
  });
});