class Controls extends Phaser.Scene {

    constructor(){
        super("controlsScreen");
    }

    preload() {
        
    }

    create() {

        this.spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.zKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);

        this.add.text(500, 400, 'Controls:\nSpace/Z: Shoot\nUp/Down: Move\n\nPress Space/Z to return to title',{ 
            //fontFamily: 'CyberPunks',
            //fontSize: '40px',
            wordWrap: {
                width: 80
            }
        }).setOrigin(0.5);

        document.getElementById('description').innerHTML = '<h2>Controls.js</h2>';
    }

    update() {

        if(Phaser.Input.Keyboard.JustDown(this.spaceBar)) {
            console.log("Select");
            this.scene.switch('titleScreen');
        }

    }
    
    changeOptions(){
        console.log("Checking options");
        //DEFUNCT
    }

}

/*TO-DO
 - Title text (how implement text in Phaser)
 - Select options (mouse/buttons click + spacebar for added functionality?)
 - Screen transition

*/