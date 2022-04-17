class Ship extends Phaser.GameObjects.Sprite{

    constructor(scene, x, y, texture, frame, pointValue){
        super(scene, x, y, texture);
        scene.add.existing(this);
        this.pointValue = pointValue;
        this.moveSpeed = 3;
    }

    update(){
        this.x -= 1;
        if(this.x < 0 - this.width){
            this.x = game.config.width;
        }
    }

    reset(){
        this.x = game.config.width;
    }

}