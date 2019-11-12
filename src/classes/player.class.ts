export class Player {
    constructor(
        ctx: CanvasRenderingContext2D
    ) {
        this.ctx = ctx
    }

    public ctx: CanvasRenderingContext2D;

    public drawPlayer(): void {
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(0, 0, 150, 75);
    }
}