const gameEngine = new GameEngine();
const ASSET_MANAGER = new AssetManager();

// Queue the sprite sheet for download
ASSET_MANAGER.queueDownload("/simple-sprite-animation/oneSprite2.png");

ASSET_MANAGER.downloadAll(() => {
    const canvas = document.getElementById("gameWorld");
    const ctx = canvas.getContext("2d");

    gameEngine.init(ctx);

    // Add the sprite entity to the game engine
    const sprite = new SpriteEntity(ASSET_MANAGER.getAsset("/simple-sprite-animation/oneSprite2.png"));
    gameEngine.addEntity(sprite);

    gameEngine.start();
});
