class Play extends Phaser.Scene{
    constructor(){
        super("play");
    }
    preload() {
        this.load.image('starfield', 'assets/starfield.png');
        this.load.image('rocket', 'assets/rocket.png');
        this.load.image('spaceship', 'assets/spaceship.png');
        this.load.spritesheet('explosion', './assets/explosion.png', {frameWidth: 64, frameHeight: 32, startFrame: 0, endFrame: 9});
        this.load.audio('sfx_explosion', './assets/explosion38.wav');
        this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
    }

    create(){
        this.gameOver = false;
        //UI and background
        this.starfield = this.add.tileSprite(
            0,0,640,480, 'starfield'
        ).setOrigin(0,0);
        this.add.rectangle(0, 0, game.config.width, game.config.height/10, 0xfacade).setOrigin(0, 0);
        //initialize objects
        this.p1Rocket = new Rocket(this, game.config.width/2, 300, 'rocket' );
        this.ship1 = new Ship(this, game.config.width/3, 100, 'spaceship' );
        this.ship2 = new Ship(this, game.config.width/2, 275, 'spaceship' );
        this.ship3 = new Ship(this, game.config.width/1, 425, 'spaceship' );
        //keys
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update(){
        this.starfield.tilePositionX -= 6;
        if(keyLEFT.isDown){
            this.p1Rocket.x -= 4;
        }
        if(keyRIGHT.isDown) {
            this.p1Rocket.x += 4;
        }

        this.ship1.update();
        this.ship2.update();
        this.ship3.update();
        this.p1Rocket.update();
    }
}
