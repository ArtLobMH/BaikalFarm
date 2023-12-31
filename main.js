var config = {
    type: Phaser.AUTO,
    width: 1700,
    height: 1000,
    backgroundColor: '#4488aa',
    pixelArt: true,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    title: "Байкальская ферма",
    scale: {
        mode: Phaser.Scale.FIT
    }    
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('footpathTiles', 'assets/footpath1_1.png');
    this.load.image('beachTiles', 'assets/beach_1.png');
    this.load.image('patchsTiles', 'assets/patchs_1.png');
    this.load.image('houseTiles', 'assets/house_1.png');
    this.load.image('treeTiles', 'assets/tree_1.png');
    this.load.tilemapTiledJSON('tilemap', 'assets/BaikalFarm.json');

    this.load.image('marketIcon', 'assets/market_icon.png');
    this.load.image('menuIcon', 'assets/menu_icon.png');
    this.load.image('repIcon', 'assets/repository_icon.png');

    this.load.image('market', 'assets/market_frame2.png')
}

function create ()
{
    this.scale.displaySize.setAspectRatio( config.width/config.height );
    this.scale.refresh();

    var map = this.make.tilemap({key: 'tilemap'});
    var footpathTiles = map.addTilesetImage("footpath1 (1)", 'footpathTiles');
    var beachTiles = map.addTilesetImage("beach (1)", 'beachTiles');
    var patchsTiles = map.addTilesetImage("patchs (1)", 'patchsTiles');
    var houseTiles = map.addTilesetImage("house (1)", 'houseTiles');
    var treeTiles = map.addTilesetImage("tree (1)", 'treeTiles');

    const tilesets = [footpathTiles, beachTiles, patchsTiles, houseTiles, treeTiles];

    map.createLayer(0, tilesets);
    map.createLayer(1, tilesets)
    map.createLayer(2, tilesets)
    map.createLayer(3, tilesets)
    map.createLayer(4, tilesets)

    this.cameras.main.setBounds(-700, 0, map.widthInPixels, map.heightInPixels);
    this.cameras.main.setZoom(1.5);

    var cursors = this.input.keyboard.createCursorKeys();

        var controlConfig = {
            camera: this.cameras.main,
            left: cursors.left,
            right: cursors.right,
            up: cursors.up,
            down: cursors.down,
            speed: 0.5
        };

        this.controls = new Phaser.Cameras.Controls.FixedKeyControl(controlConfig);

    const menuButt = this.add.image(400, 10, 'menuIcon').setInteractive({ cursor: 'pointer' });
    const marketButt = this.add.image(450, 10, 'marketIcon').setInteractive({ cursor: 'pointer' });
    const repButt = this.add.image(500, 10, 'repIcon').setInteractive({ cursor: 'pointer' });

    var market = this.add.image(100, 400, 'market').setVisible(0)

    menuButt.on('pointerover', function (event)
    {
        this.setTint(0x888888);
    });
    menuButt.on('pointerout', function (event)
    {
        this.clearTint();
    });

    marketButt.on('pointerover', function (event)
    {
        this.setTint(0x888888);
    });
    marketButt.on('pointerout', function (event)
    {
        this.clearTint();
    });
    marketButt.on('pointerdown', function (event)
    {
        if (market.visible == true){
            market.setVisible(0)
        }
        else{
            market.setVisible(1)
        }
    });

    repButt.on('pointerover', function (event)
    {
        this.setTint(0x888888);
    });
    repButt.on('pointerout', function (event)
    {
        this.clearTint();
    });
}
/*
function update (time, delta)
{
    this.controls.update(delta);
}
*/

function update ()
{
    
}
