"use strict";
exports.__esModule = true;
var player_class_1 = require("./classes/player.class");
var game = document.getElementById("game");
var gameContext = game.getContext("2d");
var player = new player_class_1.Player(gameContext);
player.drawPlayer();
