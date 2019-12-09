var endState = {
	create: function(){

		console.log("entrou");
		this.music = game.add.audio('clannad');
		this.music.volume = .5;
		this.music.play();


		
		game.add.sprite(0, 0, 'bg_battle');
		this.blocks = game.add.group();
		this.blocks.enableBody = true;

		
		for(var i = 0; i<17;i++){
			var block = this.blocks.create(i*50,50*12,'block');
			block.body.immovable = true;
		}
		for(var i = 0; i<17;i++){
			var block = this.blocks.create(i*50,50*11,'block');
			block.body.immovable = true;
		}
		
		
		//carrega titulo da tela
		var txtTitulo = game.add.text(game.world.centerX, 600, 'FIM', { font: '20px emulogic', fill: '#fff' });
		txtTitulo.anchor.set(0.5, 0.5);	
		
	
		var all = game.add.sprite(game.world.centerX,game.world.centerY,'all');
		all.anchor.set(0.5);



		var button;
		
		button = game.add.button(50, 600, 'btn_sound', this.keyS, this, 2, 1, 0);
		button.anchor.set(0,0.5);
		
		
		var txtPressStart = game.add.text(game.world.centerX,100,'APERTE ENTER',{font:'20px emulogic',fill:'#f00'});
			txtPressStart.anchor.set(.5);
			txtPressStart.alpha = 0;
			
		game.time.events.add(3000,function(){
			game.add.tween(txtPressStart).to({alpha:1},500).to({alpha:0},500).loop().start();
			
			var enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER); 
				enterKey.onDown.addOnce(this.backToMenu,this);
		},this);
	},
	

	keyS: function () {
		
		console.log("PREMIDO BOTAO S");
		this.music.stop();

		game.state.start('sound');
	},

	backToMenu: function(){
		this.music.stop();
		game.state.start('menu');
	}
};
