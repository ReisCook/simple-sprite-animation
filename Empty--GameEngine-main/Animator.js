class Animator {
    constructor(spriteSheet, xStart, yStart, frameWidth, frameHeight, frameCount, frameDuration) {
        Object.assign(this, { spriteSheet, xStart, yStart, frameWidth, frameHeight, frameCount, frameDuration });
        this.elapsedTime = 0;
        this.totalTime = frameCount * frameDuration;
    }

    drawFrame(tick, ctx, x, y) {
        this.elapsedTime += tick;
        if (this.elapsedTime >= this.totalTime) this.elapsedTime -= this.totalTime;

        const frame = Math.floor(this.elapsedTime / this.frameDuration);
        const sx = this.xStart + frame * this.frameWidth;
        const sy = this.yStart;

        ctx.drawImage(
            this.spriteSheet,
            sx, sy, this.frameWidth, this.frameHeight, // Source rectangle
            x, y, this.frameWidth, this.frameHeight  // Destination rectangle
        );
    }
}