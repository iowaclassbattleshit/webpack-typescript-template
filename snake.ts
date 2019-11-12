import { Player } from "./src/classes/player.class";

const game: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("game");
const gameContext: CanvasRenderingContext2D = game.getContext("2d");

const player = new Player(gameContext);
player.drawPlayer();