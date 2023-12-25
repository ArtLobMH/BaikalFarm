var config = {
    type: Phaser.AUTO,
    width: 1500,
    height: 1000,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('tiles', 'assets/textures.jpg');
    this.load.tilemapTiledJSON('tilemap', 'assets/FP_map.json')
}

function create ()
{
    const map = this.make.tilemap({key: 'tilemap'})
    const tileset = map.addTilesetImage('textures', 'tiles')

    map.createStaticLayer('floor', tileset)
    map.createStaticLayer('grass', tileset)
}

function update ()
{

}