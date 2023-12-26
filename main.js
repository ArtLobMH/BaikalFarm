//import 'plants.js'

var config = {
    type: Phaser.AUTO,
    width: 1500,
    height: 1000,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    title: "Байкальская ферма"
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('tiles', 'assets/textures.jpg');
    this.load.image('pumpkin', 'assets/Pumpkin.png');
    this.load.image('settButton', 'assets/sett_button.png')
    this.load.image('resButton', 'assets/res_button.png')
    this.load.image('menuButton', 'assets/menu_button.png')
    this.load.image('marketButton', 'assets/market_button.png')
    this.load.image('resourceBoard', 'assets/menu_template.png')
    this.load.tilemapTiledJSON('tilemap', 'assets/FP_map.json')
}

function create ()
{
    const map = this.make.tilemap({key: 'tilemap'})
    const tileset = map.addTilesetImage('textures', 'tiles')

    map.createStaticLayer('floor', tileset)
    map.createStaticLayer('grass', tileset)
    this.add.image(1300, 100, 'resourceBoard')
    this.add.image(1250, 50, 'marketButton')
    this.add.image(1450, 150, 'menuButton')
    this.add.image(1250, 150, 'resButton')
    this.add.image(1450, 50, 'settButton')
}

function update ()
{

}