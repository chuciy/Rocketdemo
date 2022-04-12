class Menu extends Phaser.Scene {
    constructor(){
        super("menuScene");
    }

    create(){
        let menuText = this.add.text(200, 200, "Rocket Patrol Menu");
        menuText.setOrigin(0.15, 0.5);
        this.scene.start("play");
    }
}