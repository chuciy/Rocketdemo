class Rocket extends Phaser.GameObjects.Sprite{

    constructor(scene, x, y, texture){
        super(scene, x, y, texture);
        scene.add.existing(this);
        this.isFiring = false;
    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(keyF)) {
            this.isFiring = true;
            this.y +=5;
        }

        if(this.isFiring){
            this.isFiring = false;
        }
    }
}