class Ship extends Phaser.GameObjects.Sprite{

    constructor(scene, x, y, texture){
        super(scene, x, y, texture);
        scene.add.existing(this);
        this.pointValue = 1;
    }

    update(){
        this.x -= 1;
        if(this.x < -40){
            this.x = game.config.width + 20;
        }
    }

}