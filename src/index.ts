import "./styles/styles.scss"
import { Gamemap } from "./classes/map.class";
import { Player } from "./classes/player.class";

const map = new Gamemap(document.body);
const player = new Player;

map.initMap();

player.drawPlayer(map.context);