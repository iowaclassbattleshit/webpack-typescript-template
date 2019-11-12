import { Player } from "./classes/player.class";
import { Subject } from "rxjs";

const game: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("game");
const gameContext: CanvasRenderingContext2D = game.getContext("2d");

const player = new Player(gameContext);
player.drawPlayer();

const test = new Subject();