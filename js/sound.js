var soundState = {
	create: function () {

		this.music = game.add.audio('angelbeats2');
		this.music.volume = .5;
		this.music.play();


		
		game.add.sprite(0, 0, 'bg_battle');
		this.blocks = game.add.group();
		this.blocks.enableBody = true;

		for(var i = 0; i<17;i++){
			var block = this.blocks.create(i*50,1,'block');
			block.body.immovable = true;
		}
		for(var i = 0; i<17;i++){
			var block = this.blocks.create(i*50,50*12,'block');
			block.body.immovable = true;
		}
		for(var i = 0; i<17;i++){
			var block = this.blocks.create(i*50,50*11,'block');
			block.body.immovable = true;
		}
		for(var i = 0; i<12;i++){
			var block = this.blocks.create(0,50*i,'block');
			block.body.immovable = true;
		}
		for(var i = 0; i<12;i++){
			console.log(i);
			var block = this.blocks.create(50*16, 50*i,'block');
			block.body.immovable = true;
		}
		var txtTitulo = game.add.text(15, 15, 'SOUND TEST', { font: '20px emulogic', fill: '#fff' });
		
		
		var button;
		
		button = game.add.button(game.world.centerX, 580, 'btn_papel1', this.actionOnClick_papel, this, 1, 2, 0);
		button.anchor.set(0.5, 0);
		
		var button_pedra;
		button_pedra = game.add.button(game.world.centerX-300, 580, 'btn_pedra1', this.actionOnClick_pedra, this, 1, 2, 0);
		button_pedra.anchor.set(0.5, 0);
		
		
		var button_tesoura;
		button_tesoura = game.add.button(game.world.centerX+300, 580, 'btn_tesoura1', this.actionOnClick_tesoura, this, 1, 2, 0);
		button_tesoura.anchor.set(0.5, 0);
		
		


		var enterKeyA = game.input.keyboard.addKey(Phaser.Keyboard.A);
		var enterKeyS = game.input.keyboard.addKey(Phaser.Keyboard.S);
		enterKeyA.onDown.addOnce(this.keyA, this);
		enterKeyS.onDown.addOnce(this.keyS, this);		
	},

	keyA: function () { // ACESSA OS CARDs
		game.global.monsters += 77;
		console.log("PREMIDO BOTAO A")
		this.music.stop();

		game.state.start('card');
		},

	keyS: function () {
		console.log("PREMIDO BOTAO S")
		this.music.stop();

		game.state.start('stage1');
	},


	up: function () {
		console.log('button up', arguments);
	},

	over: function () {
		
		

		console.log('button over');
	},

	out: function () {

		console.log('button out');
	},

	

	actionOnClick_papel: function (button) {

		console.log("BOTAO PAPEL PREMIDO");
		this.music.stop();
		this.music = game.add.audio('angelbeats1');
		this.music.volume = .2;
		this.music.play();


	},
	actionOnClick_pedra: function (button) {

		console.log("BOTAO PEDRA PREMIDO");
		this.music.stop();
		this.music = game.add.audio('clannad');
		this.music.volume = .2;
		this.music.play();

	},
	
	actionOnClick_tesoura: function (button) {

		console.log("BOTAO TESOURA PREMIDO");
		this.music.stop();
		this.music = game.add.audio('clannad_nagisa');
		this.music.volume = .2;
		this.music.play();

	},
	
	actionOnClick_hadouken: function (button) {

		console.log("BOTAO HADOUKEN PREMIDO");
		this.ganhou();

		


	},

	back: function(){
		this.music.stop();

		game.state.start('stage1');
	}

	
};
