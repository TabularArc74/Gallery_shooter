class Level_1 extends Phaser.Scene {

    constructor(){
        super("levelOne");
    }

    preload() {
    }

    create() {


        this.spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        my.sprite.playerShip = this.add.sprite(200, 395, "player");

    }

    update() {

        if (Phaser.Input.Keyboard.JustDown(this.spaceBar)) {
            console.log("Firing");
            
        }

        if (this.upKey.isDown) {
            if(my.sprite.playerShip.y < 984){
                my.sprite.playerShip.y = my.sprite.playerShip.y + 8;
            }
        }

        if (this.downKey.isDown) {
            if(my.sprite.playerShip.y > 16){
                my.sprite.playerShip.y = my.sprite.playerShip.y - 8;
            }
        }

        
    }

    levelInit(){
        console.log("Restarting level");
        
    }

}