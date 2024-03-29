var soundState = {
	create: function () {
		//carrega a musica da tela.
		this.music = game.add.audio('angelbeats2');
		this.music.volume = .5;
		this.music.play();

		//monta o cenário, mais pratico do que utilizando a matriz do mapa. Adiciona o bg e
		//utiliza os FORs para preencher a parte inferior com blocos
		var bg = game.add.sprite(850, 650, 'bg_sound');
		bg.anchor.set(1,1)
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
		var txtTitulo = game.add.text(game.world.centerX, 600, 'SOUND TEST', { font: '20px emulogic', fill: '#fff' });
		txtTitulo.anchor.set(0.5, 0.5);	
		//carrega o botao para retornar para os cards do jogo
		var button;
		button = game.add.button(50, 600, 'btn_cards', this.keyA, this, 2, 1, 0);
		button.anchor.set(0,0.5);
		
		//carrega os botoes para reproduzir as musicas do jogo
		var button_music_1;
		button_music_1 = game.add.button(100, 50, 'btn_music_menu', this.actionOnClick_music_1, this, 1, 2, 0);
		button_music_1.anchor.set(0.5, 0);
		
		var button_music_2;
		button_music_2 = game.add.button(580, 50, 'btn_music_mapa', this.actionOnClick_music_2, this, 1, 2, 0);
		button_music_2.anchor.set(0.5, 0);
		
		var button_music_3;
		button_music_3 = game.add.button(120, 250, 'btn_music_battle', this.actionOnClick_music_3, this, 1, 2, 0);
		button_music_3.anchor.set(0.5, 0);
		
		var button_music_4;
		button_music_4 = game.add.button(100, 480, 'btn_music_cards', this.actionOnClick_music_4, this, 1, 2, 0);
		button_music_4.anchor.set(0.5, 0);
		
		var button_music_5;
		button_music_5 = game.add.button(game.world.centerX, game.world.centerY-100, 'btn_music_fim', this.actionOnClick_music_5, this, 1, 2, 0);
		button_music_5.anchor.set(0.5, 0);
		
		var button_music_6;
		button_music_6 = game.add.button(game.world.centerX-80, 410, 'btn_music_sound', this.actionOnClick_music_6, this, 1, 2, 0);
		button_music_6.anchor.set(0.5, 0);
		
		//captura de teclas para alternar entre as telas MAPA e batalaha
		var enterKeyA = game.input.keyboard.addKey(Phaser.Keyboard.A);
		var enterKeyS = game.input.keyboard.addKey(Phaser.Keyboard.S);
		enterKeyA.onDown.addOnce(this.keyA, this);
		enterKeyS.onDown.addOnce(this.keyS, this);		
	},
	
	//alterna para a tela de cards
	keyA: function () { // ACESSA OS CARDs
		this.music.stop();
		game.state.start('card');
		},
	
		//alterna para a tela de mapa
	keyS: function () {
		this.music.stop();
		game.state.start('stage1');
	},

//-------FUNCOES CHAMADAS AO PRESSIONAR OS BOTOES-------------
//  ----- COMENTARIOS DA PRIMEIRA VALE PARA TOODAS

	actionOnClick_music_1: function (button) {
		//PAUSA A MUSICA ATUAL (importante para nao sobrepor uma na outra)
		this.music.stop();
		//add a musica, seta o volume e dá play. SEM LOOP
		this.music = game.add.audio('menu');
		this.music.volume = .2;
		this.music.play();
	},
	actionOnClick_music_2: function (button) {
		//PAUSA A MUSICA ATUAL (importante para nao sobrepor uma na outra)
		this.music.stop();
		//add a musica, seta o volume e dá play. SEM LOOP
		this.music = game.add.audio('clannad_nagisa');
		this.music.volume = .2;
		this.music.play();

	},
	
	actionOnClick_music_3: function (button) {
		//PAUSA A MUSICA ATUAL (importante para nao sobrepor uma na outra)
		this.music.stop();
		//add a musica, seta o volume e dá play. SEM LOOP
		this.music = game.add.audio('battle');
		this.music.volume = .2;
		this.music.play();

	},

	actionOnClick_music_4: function (button) {
		//PAUSA A MUSICA ATUAL (importante para nao sobrepor uma na outra)
		this.music.stop();
		//add a musica, seta o volume e dá play. SEM LOOP
		this.music = game.add.audio('angelbeats1');
		this.music.volume = .2;
		this.music.play();

	},
	actionOnClick_music_5: function (button) {
		//PAUSA A MUSICA ATUAL (importante para nao sobrepor uma na outra)
		this.music.stop();
		//add a musica, seta o volume e dá play. SEM LOOP
		this.music = game.add.audio('clannad');
		this.music.volume = .2;
		this.music.play();

	},
	actionOnClick_music_6: function (button) {
		//PAUSA A MUSICA ATUAL (importante para nao sobrepor uma na outra)
		this.music.stop();
		//add a musica, seta o volume e dá play. SEM LOOP
		this.music = game.add.audio('angelbeats2');
		this.music.volume = .2;
		this.music.play();

	},

};
