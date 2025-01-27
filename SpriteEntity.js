class SpriteEntity {
    constructor(spriteSheet) {
        this.animator = new Animator(
            spriteSheet,
            0, 0, // Start x and y positions on the sprite sheet
            32, 32, // Frame width and height
            8, 0.1 // Total frames and duration per frame
        );
        this.x = 100; // Position on the canvas
        this.y = 100;
    }

    update() {
        // Update logic, if any, goes here
    }

    draw(ctx) {
        this.animator.drawFrame(gameEngine.clockTick, ctx, this.x, this.y);
    }
}