// create a new Phaser game on an 800x600 screen


var main = {
    // load all the images and sounds
    preload: function() {
        game.stage.backgroundColor = '#71a5ef';	  	
        game.load.image('player', 'rikka.jpg');
        game.load.image('obstacle', 'Sword.jpg');
    },

    // set up the game
    create: function() {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        // create the player using the missionbit image and place it at (100, 245)
        this.player = game.add.sprite(100, 245, 'player');
        this.obstacle = game.add.sprite(104 , 365, 'obstacle');
     
    game.physics.arcade.enable(this.obstacle);
    game.physics.arcade.enable(this.player);
    this.player.body.gravity.y = 1000;      
    
    var space = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    space.onDown.add(this.jump, this);
    
    },

    // update the state of the game
    update: function() {
        if(this.player.inWorld == false)
            this.restartGame();
     game.physics.arcade.overlap(this.player,this.obstacle, this.restartGame, null, this);
    },
  
    // makes the player jump
    jump: function() {
        this.player.body.velocity.y = -500;
    },
  
    addPipe: function() {  

    },

    // resest the state of the game
    restartGame: function() {
        game.state.start('default');    
    }
};

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', main);
game.state.start('default');