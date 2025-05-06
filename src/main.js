
"use strict"

let config = {
    parent: 'phaser-game',
    type: Phaser.CANVAS,
    render: {
        pixelArt: true
    },
    width: 1000,
    height: 800,
    scene: [Title, Controls, Level_1],
    fps: {forceSetTimeOut: true, target: 30}
}

var my = {sprite: {}};

const game = new Phaser.Game(config);



/*TO-DO:
 - Asset implementation
 - Bullet system
 - Enemy pathing
 - Score/enemy death
 - Player death/transition

Concepts:
 - Either have global variables to track player health, score, etc. or use a json file

*/