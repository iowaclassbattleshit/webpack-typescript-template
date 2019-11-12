export class Gamemap {
    constructor(
        base: HTMLElement
    ) {
        this.base = base;
    }

    private base: HTMLElement;
    private context2D: CanvasRenderingContext2D;

    public get context(): CanvasRenderingContext2D {
        return this.context2D;
    }

    public initMap() {
        const canvas = document.createElement("canvas");
        canvas.style.height = "100%";
        canvas.style.width = "100%";
        this.context2D = canvas.getContext("2d");
        this.base.append(canvas);
    }
}