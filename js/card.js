var cardState = {
	
	create: function () {
		this.music = game.add.audio("angelbeats1");
		this.music.loop = true;
		this.music.volume = .5;
		this.music.play();

		game.add.sprite(0, 0, 'bg_verde');

		this.blocks = game.add.group();
		this.blocks.enableBody = true;
	
	

		//for(var i = 0; i<17;i++){
		//	var block = this.blocks.create(i*50,1,'block');
		//	block.body.immovable = true;
		//}
		for(var i = 0; i<17;i++){
			var block = this.blocks.create(i*50,50*12,'block');
			block.body.immovable = true;
		}
		for(var i = 0; i<17;i++){
			var block = this.blocks.create(i*50,50*11,'block');
			block.body.immovable = true;
		}
		//for(var i = 0; i<12;i++){
		//	var block = this.blocks.create(0,50*i,'block');
		//	block.body.immovable = true;
		//}
		//for(var i = 0; i<12;i++){
		//	console.log(i);
		//	var block = this.blocks.create(50*16, 50*i,'block');
		//	block.body.immovable = true;
		//}



		var txtTitulo = game.add.text(game.world.centerX, 590, 'CARDS', { font: '20px emulogic', fill: '#fff' });
		txtTitulo.anchor.set(0.5, 0);

		this.txtMonsters = game.add.text(game.world.width - 15,600,'CARDS: ' + game.cards.length,{font:'15px emulogic',fill:'#fff'});
		this.txtMonsters.anchor.set(1,0);
		var button;
		
		button = game.add.button(50, 600, 'btn_mapa', this.keyS, this, 2, 1, 0);
		button.anchor.set(0,0.5);

		button.onInputOver.add(this.over, this);
		button.onInputOut.add(this.out, this);
		button.onInputUp.add(this.up, this);



		vetorX = [130, 260, 390, 520, 650, 130, 260, 390, 520, 650]
		vetorY = [100, 100, 100, 100, 100, 300, 300, 300, 300, 300];
		console.log("TAMANHO DO VETOR MONSTERS2 " + game.cards);

		
		game.cards.forEach(function (item, indice, array) {
			console.log("ITEM: "+ item, indice);
			game.add.sprite(vetorX[indice], vetorY[indice], item);
			var txtpok = game.add.text(vetorX[indice], vetorY[indice]+160, item,{ font: '11px emulogic', fill: '#fff' });

		

		});




		var enterKeyS = game.input.keyboard.addKey(Phaser.Keyboard.S);
		var enterKeyD = game.input.keyboard.addKey(Phaser.Keyboard.D);
		enterKeyS.onDown.addOnce(this.keyS, this);
		enterKeyD.onDown.addOnce(this.keyD, this);


	},

	
	

	keyS: function () {
		this.music.stop();

		console.log("PREMIDO BOTAO S")
		game.state.start('stage1');
	},

	keyD: function () {
		this.music.stop();

		console.log("PREMIDO BOTAO D")
		game.state.start('battle');
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

	actionOnClick: function (button) {

		background.visible = !background.visible;

	},
	
};
