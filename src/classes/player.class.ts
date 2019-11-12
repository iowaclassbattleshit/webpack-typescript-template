export class Player {
    constructor() {

    }

    public drawPlayer(context: CanvasRenderingContext2D) {
        context.beginPath();
        context.strokeStyle = "green";
        context.rect(0, 0, 10, 10);
        context.closePath();
    }
}