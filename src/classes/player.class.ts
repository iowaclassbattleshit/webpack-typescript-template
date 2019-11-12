export class Player {
    constructor(
        ctx: CanvasRenderingContext2D
    ) {
        this.ctx = ctx
    }

    public ctx: CanvasRenderingContext2D;

    public drawPlayer(): void {
        gameContext.fillStyle = "red";
        gameContext.fillRect(0, 0, 150, 75);
    }
}