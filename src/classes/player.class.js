"use strict";
exports.__esModule = true;
var Player = /** @class */ (function () {
    function Player(ctx) {
        this.ctx = ctx;
    }
    Player.prototype.drawPlayer = function () {
        gameContext.fillStyle = "red";
        gameContext.fillRect(0, 0, 150, 75);
    };
    return Player;
}());
exports.Player = Player;
