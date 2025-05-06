class Title extends Phaser.Scene {

    constructor(){
        super("titleScreen");
    }

    preload() {
        this.load.setPath("./assets/");                        // Set load path
        this.load.image("arrow", "ship_D.png");             // arrow select
        this.load.image("player", "ship_K.png");

        //load everything during title screen, no other preload required
    }

    create() {

        this.currSelect = 0; //0 is start, 1 is controls

        this.upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        this.downKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        this.spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.zKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);

        my.sprite.arrow = this.add.sprite(200, 395, "arrow");

        document.getElementById('description').innerHTML = '<h2>Title.js</h2><br>A/D: Move left and right <br>SPACE - Fire orb';
        /*this.add.text(500, 200, 'Operation: SPLICE',{ 
            fontFamily: 'DigitalDare',
            fontSize: '80px'
        }).setOrigin(0.5);*/
        this.add.text(70, 157, 'Operation:',{ 
            fontFamily: 'DigitalDare',
            fontSize: '80px'
        }).setOrigin(0);
        this.add.text(615, 160, 'SPLICE',{ 
            fontFamily: 'CyberPunks',
            fontSize: '100px'
        }).setOrigin(0);
        this.add.text(250, 380, 'Start',{ 
            fontFamily: 'CyberPunks',
            fontSize: '40px',
            wordWrap: {
                width: 60
            }
        }).setOrigin(0);
        this.add.text(250, 480, 'How To Play',{ 
            fontFamily: 'CyberPunks',
            fontSize: '40px'
        }).setOrigin(0);
     
    }

    update() {

        if(Phaser.Input.Keyboard.JustDown(this.spaceBar)) {
            console.log("Select");
            if(this.currSelect == 0){
                this.scene.switch('levelOne');
            }else{
                this.scene.switch('controlsScreen');
            }
        }
        if(Phaser.Input.Keyboard.JustDown(this.zKey)) {
            console.log("Select");
            if(this.currSelect == 0){
                this.scene.switch('levelOne');
            }else{
                this.scene.switch('controlsScreen');
            }
        }

        if (Phaser.Input.Keyboard.JustDown(this.upKey)) {
            console.log("Selecting up option");
            if(this.currSelect == 1){
                this.currSelect --;
                my.sprite.arrow.y = 395;
            }
        }

        if (Phaser.Input.Keyboard.JustDown(this.downKey)) {
            console.log("Selecting down option");
            if(this.currSelect == 0){
                this.currSelect ++;
                my.sprite.arrow.y = 495;
            }
        }




    }
}

/*TO-DO
 - Title text (how implement text in Phaser)
 - Select options (mouse/buttons click + spacebar for added functionality?)
 - Screen transition

*/