class Level_1 extends Phaser.Scene {

    constructor(){
        super("levelOne");
    }

    preload() {
        this.load.setPath("./assets/");                        // Set load path
        this.load.image("char", "tile_0240.png");             // character
        this.load.image("emit", "tile_0014.png");             // emission
    }

    create() {

        this.inFlight = false;

        this.spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        my.sprite.char = this.add.sprite(500, 750, "char");
        my.sprite.emit = this.add.sprite(500, 750, "emit");
        my.sprite.emit.visible = false;

        document.getElementById('description').innerHTML = '<h2>Main.js</h2><br>A/D: Move left and right <br>SPACE - Fire orb';
    }

    update() {

        if (Phaser.Input.Keyboard.JustDown(this.spaceBar)) {
            console.log("Firing");
            
        }

        
    }

    levelInit(){
        console.log("Restarting level");
        
    }

}