import { Player } from './player';
import { Scoreboard } from './scoreboard';

export class Game {
  players: Player[];
  scoreboard: Scoreboard;

  constructor() {
    this.players = [];
    this.scoreboard = new Scoreboard();
  }

  public addPlayer(name: string) {
    const player = new Player(name);
    this.players.push(player);
    this.scoreboard.updateScoreboard(this.players);
  }

  public addPoints(name: string, points: number) {
    const player = this.players.find((p) => p.name === name);
    if (player) {
      player.score += points;
      this.scoreboard.updateScoreboard(this.players);
    }
  }
}
