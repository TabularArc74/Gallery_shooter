class Controls extends Phaser.Scene {

    constructor(){
        super("controlsScreen");
    }

    preload() {
        
    }

    create() {

        this.currSelect = 0; //0 is start, 1 is controls

        this.upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.downKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
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


        /*if(my.sprite.emit.y < -10){
            this.inFlight = false;
            my.sprite.emit.visible = false;
        }

        if (this.dKey.isDown) {
            if(my.sprite.char.x < 984){
                my.sprite.char.x = my.sprite.char.x + 8;
            }
        }

        if (this.aKey.isDown) {
            if(my.sprite.char.x > 16){
                my.sprite.char.x = my.sprite.char.x - 8;
            }
        }*/



        

    }
    
    changeOptions(){
        console.log("Checking options");
        
    }

}

/*TO-DO
 - Title text (how implement text in Phaser)
 - Select options (mouse/buttons click + spacebar for added functionality?)
 - Screen transition

*/