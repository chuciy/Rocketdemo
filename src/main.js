console.log("hello from main.js");

let config = {
    type : Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [Menu, Play]

};
let game = new Phaser.Game(config);

let keyLEFT, keyRIGHT, keyF, keyR;