import { Player } from "./player";

export class Scoreboard {
  private static instance: Scoreboard | null = null;

  constructor() {}

  public static getInstance() {
    if (!Scoreboard.instance) {
      Scoreboard.instance = new Scoreboard();
    }
    return Scoreboard.instance;
  }

  updateScoreboard(players: Player[]) {
    let maxPoints = 0;
    let winner: Player | null = null;

    for (const player of players) {
      if (player.score > maxPoints) {
        maxPoints = player.score;
        winner = player;
      }
    }

    if (winner) {
      return `The winner is: ${winner.name} with ${maxPoints} points`;
    } else {
      return "No players available.";
    }
  }

  resetScoreboard() {
    Scoreboard.instance = null;
  }
}
