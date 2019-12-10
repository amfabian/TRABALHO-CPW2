var cardState = {
	
	create: function () {
		//carrega a musica da tela.
		this.music = game.add.audio("angelbeats1");
		this.music.loop = true;
		this.music.volume = .5;
		this.music.play();

		//monta o cenário, mais pratico do que utilizando a matriz do mapa. Adiciona o bg e
		//utiliza os FORs para preencher a parte inferior com blocos
		game.add.sprite(0, 0, 'bg_verde');
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
		//texto do titulo da tela e quantidade de cards capturados padrao nas telas MApa, card e battle.
		var txtTitulo = game.add.text(game.world.centerX, 600, 'CARDS', { font: '20px emulogic', fill: '#fff' });
		txtTitulo.anchor.set(0.5, 0.5);
		this.txtCards = game.add.text(game.world.width - 15,600,'CARDS: ' + game.cards.length,{font:'15px emulogic',fill:'#fff'});
		this.txtCards.anchor.set(1,0.5);
		//Botao para retornar para o mapa
		var button;
		button = game.add.button(50, 600, 'btn_mapa', this.keyS, this, 2, 1, 0);
		button.anchor.set(0,0.5);
		
		//mapa da posição no eixo X e Y de cada uma das 10 cards possiveis de se armazenar.
		//limitado apenas pelo tamanho do vetor game.monsters
		vetorX = [130, 260, 390, 520, 650, 130, 260, 390, 520, 650]
		vetorY = [100, 100, 100, 100, 100, 300, 300, 300, 300, 300];
		console.log("TAMANHO DO VETOR MONSTERS2 " + game.cards);
		//For adiciona os cards já caputados do array game.cards incluindo
		game.cards.forEach(function (item, indice, array) {
			console.log("ITEM: "+ item, indice);
			//adiciona a imagem de cada card.
			game.add.sprite(vetorX[indice], vetorY[indice], item);
			//adciona o nome abaixo do card.
			var txtpok = game.add.text(vetorX[indice], vetorY[indice]+160, item,{ font: '11px emulogic', fill: '#fff' });
		});

		//captura de teclas para alternar entre as telas MAPA e batalaha
		var enterKeyS = game.input.keyboard.addKey(Phaser.Keyboard.S);
		var enterKeyD = game.input.keyboard.addKey(Phaser.Keyboard.D);
		enterKeyS.onDown.addOnce(this.keyS, this);
		enterKeyD.onDown.addOnce(this.keyD, this);
	},

	//alterna para a tela de mapa
	keyS: function () {
		//pausa a musica e chama o estado a ser executado
		this.music.stop();
		game.state.start('stage1');
	},

	//alterna para a tela de batalha
	keyD: function () {
		//pausa a musica e chama o estado a ser executado
		this.music.stop();
		game.state.start('battle');
	},


	
};
