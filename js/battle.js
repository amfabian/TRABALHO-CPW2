var battleState = {
	create: function () {

		this.music = game.add.audio('battle');
		this.music.volume = .2;
		this.music.play();


		console.log("POKEMON APARECEU NA BATALHA: "+game.global.wild_appeared);
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

		var txtTitulo = game.add.text(game.world.centerX, 600, 'JOKEMPO', { font: '20px emulogic', fill: '#fff' });
		txtTitulo.anchor.set(0.5, 0.5);
		
		this.txtMonsters = game.add.text(game.world.width - 15,600,'CARDS: ' + game.cards.length,{font:'15px emulogic',fill:'#fff'});
		this.txtMonsters.anchor.set(1,0.5);
		
		
		var button;
		
		button = game.add.button(game.world.centerX, 480, 'btn_papel1', this.actionOnClick_papel, this, 1, 2, 0);
		button.anchor.set(0.5, 0);
		button.onInputOver.add(this.over, this);
		button.onInputOut.add(this.out, this);
		button.onInputUp.add(this.up, this);

		var button_pedra;
		button_pedra = game.add.button(game.world.centerX-220, 480, 'btn_pedra1', this.actionOnClick_pedra, this, 1, 2, 0);
		button_pedra.anchor.set(0.5, 0);
		button_pedra.onInputOver.add(this.over, this);
		button_pedra.onInputOut.add(this.out, this);
		button_pedra.onInputUp.add(this.up, this);

		
		var button_tesoura;
		button_tesoura = game.add.button(game.world.centerX+220, 480, 'btn_tesoura1', this.actionOnClick_tesoura, this, 1, 2, 0);
		button_tesoura.anchor.set(0.5, 0);
		button_tesoura.onInputOver.add(this.over, this);
		button_tesoura.onInputOut.add(this.out, this);
		button_tesoura.onInputUp.add(this.up, this);

		



		game.add.sprite(game.world.centerX,180, game.global.wild_appeared).anchor.set(.5);


		
		//txtPressStart.anchor.set(.5);

		var enterKeyP = game.input.keyboard.addKey(Phaser.Keyboard.P);
		var enterKeyO = game.input.keyboard.addKey(Phaser.Keyboard.O);
		var enterKeyI = game.input.keyboard.addKey(Phaser.Keyboard.I);
		var enterKeyX = game.input.keyboard.addKey(Phaser.Keyboard.X);


		var enterKeyA = game.input.keyboard.addKey(Phaser.Keyboard.A);
		var enterKeyS = game.input.keyboard.addKey(Phaser.Keyboard.S);
		enterKeyA.onDown.addOnce(this.keyA, this);
		enterKeyS.onDown.addOnce(this.keyS, this);

		


		enterKeyP.onDown.addOnce(this.keyP, this);
		enterKeyO.onDown.addOnce(this.keyO, this);
		enterKeyI.onDown.addOnce(this.keyI, this);
		enterKeyX.onDown.addOnce(this.keyX, this);

		
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

	keyP: function () {
		this.jokenpo(0);//PEDRA
	},

	keyO: function () {
		this.jokenpo(1);//TESOURA
	},

	keyI: function () {
		this.jokenpo(2);//PAPEL
	},

	keyX: function () {
		
		var button_hadouken;
		button_hadouken = game.add.button(game.world.centerX, 400, 'btn_hadouken1', this.actionOnClick_hadouken, this, 1, 2, 0);
		button_hadouken.anchor.set(0.5);
		button_hadouken.onInputOver.add(this.over, this);
		button_hadouken.onInputOut.add(this.out, this);
		button_hadouken.onInputUp.add(this.up, this);

	},



	jokenpo: function(num){

		console.log('TAMANHO VETOR:' +game.cards.length);
		//game.cards.unshift('pok2');
		
		game.cards.forEach(function (item, indice, array) {
			console.log(item, indice);
		  });

		//PEDRA = 0
		//TESOURA = 1
		//PAPEL = 2

		//metade da AI do jogo!
		var escolha = Math.floor(Math.random() * 3);
		console.log("ESCOLHA: "+escolha);
		this.maq(escolha);
		this.music.stop();



		if((num === 0 && escolha === 0)  || (num === 1 && escolha === 1) || (num === 2 && escolha === 2)){
			//empatar
			this.empatou();			
		}

		if((num === 0 && escolha === 1)  || (num === 1 && escolha === 2) || (num === 2 && escolha === 0)){
			//ganhar
			this.ganhou();
		}

		if((num === 0 && escolha === 2)  || (num === 1 && escolha === 0) || (num === 2 && escolha === 1)){
			//perdeu jokempo
			this.perdeu();
		}
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
		this.jokenpo(2);//PAPEL


	},
	actionOnClick_pedra: function (button) {

		console.log("BOTAO PEDRA PREMIDO");
		this.jokenpo(0);//PEDRA


	},
	
	actionOnClick_tesoura: function (button) {

		console.log("BOTAO TESOURA PREMIDO");
		this.jokenpo(1);//TESOURA


	},
	
	actionOnClick_hadouken: function (button) {

		console.log("BOTAO HADOUKEN PREMIDO");
		this.music.stop();

		this.ganhou();

		


	},

	perdeu: function(){
		console.log("PERDEU");
		
		
		this.music = game.add.audio('lose');
		this.music.volume = .5;
		this.music.play();

		this.finalBatalha("PERDEU");
	},


	empatou: function(){
		console.log("EMPATOU");
		this.music = game.add.audio('draw');
		this.music.volume = .5;
		this.music.play();
		this.finalBatalha("EMPATOU");
	},

	//VITORIA
	ganhou: function(){
		console.log("GANHOU");
		//removendo item sorteado do array.
		var removedItem = game.monsters.splice(game.global.sorteado, 1); 
		console.log("ARRAY DEPOIS DA REMOÇAO: " + game.monsters);
		game.cards.unshift(game.global.wild_appeared);

		this.music = game.add.audio('win');
		this.music.volume = .5;
		this.music.play();
		this.finalBatalha("GANHOU");
	},

	finalBatalha: function(texto){
		this.txt = game.add.text(50,600,texto,{font:'15px emulogic',fill:'#fff'});
		this.txt.anchor.set(0,.5);
		this.txt.alpha = 0;
		//em 0,5s começa a aparecer o texto piscante "PERDEU" no topo da tela 
		//jogador pode apertar a tecla enter e retornar para o jogo
		game.time.events.add(500, function(){
		game.add.tween(this.txt).to({alpha:1},500).to({alpha:0},500).loop().start();

			var enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
			enterKey.onDown.addOnce(this.fim,this);

		}, this);

		//game.time.events.add(1000, this.maquina, this);
		//caso jogador nao aperte enter, retorna para o jogo em 5s
		game.time.events.add(5000,this.fim, this);

	},
	
	maq: function(num){

		var img_maquina;

		if(num === 0){
			img_maquina = game.add.button(game.world.centerX+150, 180, 'btn_pedra', this.actionOnClick_hadouken, this, 1, 2, 0);


		} if (num === 1){
			img_maquina = game.add.button(game.world.centerX+150, 180, 'btn_tesoura', this.actionOnClick_hadouken, this, 1, 2, 0);


		} if (num === 2){
			img_maquina = game.add.button(game.world.centerX+150, 180, 'btn_papel', this.actionOnClick_hadouken, this, 1, 2, 0);


		}

		img_maquina.anchor.set(0.5);
		

	},


	fim: function(){
		this.music.stop();
		if(game.monsters.length === 0) {
			//FINALIZADO
			game.state.start('end');

			console.log("FINALIZADO!!!!!!");
			

		} else {
		game.state.start('stage1');
		}
	}

	
};
