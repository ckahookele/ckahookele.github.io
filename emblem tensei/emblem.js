// create a new Phaser game on an 800x600 screen

var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

function preload() {

    game.load.tilemap('desert', 'desert.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('tiles', 'tmw_desert_spacing.png');

}

var map;
var layer;

var marker;
var currentTile;
var cursors;

function create() {

    map = game.add.tilemap('desert');

    map.addTilesetImage('Desert', 'tiles');

    currentTile = map.getTile(2, 3);

    layer = map.createLayer('Ground');

    layer.resizeWorld();

    marker = game.add.graphics();
    marker.lineStyle(2, 0x000000, 1);
    marker.drawRect(0, 0, 32, 32);

    cursors = game.input.keyboard.createCursorKeys();

}

function update() {

    marker.x = layer.getTileX(game.input.activePointer.worldX) * 32;
    marker.y = layer.getTileY(game.input.activePointer.worldY) * 32;

    if (game.input.mousePointer.isDown)
    {
        if (game.input.keyboard.isDown(Phaser.Keyboard.SHIFT))
        {}
    }

    if (cursors.left.isDown)
    {
        game.camera.x -= 4;
    }
    else if (cursors.right.isDown)
    {
        game.camera.x += 4;
    }

    if (cursors.up.isDown)
    {
        game.camera.y -= 4;
    }
    else if (cursors.down.isDown)
    {
        game.camera.y += 4;
    }

}

function render() {

    game.debug.text('Emblem Tensei', 32, 32, '#efefef');

}
