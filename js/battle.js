var battleState = {
	create: function () {
		//carrega a musica da tela.
		this.music = game.add.audio('battle');
		this.music.volume = .2;
		this.music.play();

		//monta o cenário, mais pratico do que utilizando a matriz do mapa. Adiciona o bg e
		//utiliza os FORs para preencher a parte inferior com blocos
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
		//texto do titulo da tela e quantidade de cards capturados padrao nas telas MApa, card e battle.
		var txtTitulo = game.add.text(game.world.centerX, 600, 'JOKEMPO', { font: '20px emulogic', fill: '#fff' });
		txtTitulo.anchor.set(0.5, 0.5);
		this.txtMonsters = game.add.text(game.world.width - 15,600,'CARDS: ' + game.cards.length,{font:'15px emulogic',fill:'#fff'});
		this.txtMonsters.anchor.set(1,0.5);
		
		//Carrega botao papel
		var button_papel;
		button_papel = game.add.button(game.world.centerX, 480, 'btn_papel1', this.actionOnClick_papel, this, 1, 2, 0);
		button_papel.anchor.set(0.5, 0);
		//Carrega botao pedra
		var button_pedra;
		button_pedra = game.add.button(game.world.centerX-220, 480, 'btn_pedra1', this.actionOnClick_pedra, this, 1, 2, 0);
		button_pedra.anchor.set(0.5, 0);
		//Carrega botao tesoura
		var button_tesoura;
		button_tesoura = game.add.button(game.world.centerX+220, 480, 'btn_tesoura1', this.actionOnClick_tesoura, this, 1, 2, 0);
		button_tesoura.anchor.set(0.5, 0);
		
		//ADD Sprite do CARD sorteado para a batalha
		game.add.sprite(game.world.centerX,180, game.global.wild_appeared).anchor.set(.5);
		//ADD nome abaixo do card
		var txtpok = game.add.text(game.world.centerX, 280, game.global.wild_appeared,{ font: '15px emulogic', fill: '#fff' }).anchor.set(.5);

		//captura de teclas para alternar entre as telas MAPA e batalaha
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

	//alterna para a tela de cards
	keyA: function () { 
		//pausa a musica e chama o estado a ser executado
		this.music.stop();
		game.state.start('card');
	},

	//alterna para a tela de mapa
	keyS: function () {
		//pausa a musica e chama o estado a ser executado
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
	//Função nao documentada.
	keyX: function () {
		//ao pressionar a tecla X
		//um novo botao hadouken surge na tela
		//apertando ele, é possivel driblar o sorteio randomico
		//e ganhar diretamente a batalha de jokenpo
		var button_hadouken;
		button_hadouken = game.add.button(game.world.centerX, 400, 'btn_hadouken1', this.actionOnClick_hadouken, this, 1, 2, 0);
		button_hadouken.anchor.set(0.5);
	},

	jokenpo: function(num){
		game.cards.forEach(function (item, indice, array) {
			console.log(item, indice);
		  });
		//PEDRA = 0
		//TESOURA = 1
		//PAPEL = 2

		//metade da AI do jogo esta aqui.

		var escolha = Math.floor(Math.random() * 3);
		this.maq(escolha);
		//pausa a musica antes de executar a musica do resultado
		this.music.stop(); 

		//Logica para decidir o resultado do jokempo
		//EMPATE
		if((num === 0 && escolha === 0)  || (num === 1 && escolha === 1) || (num === 2 && escolha === 2)){
			this.empatou();			
		}
		//VITORIA
		if((num === 0 && escolha === 1)  || (num === 1 && escolha === 2) || (num === 2 && escolha === 0)){
			this.ganhou();
		}
		//DERROTA
		if((num === 0 && escolha === 2)  || (num === 1 && escolha === 0) || (num === 2 && escolha === 1)){
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

	//Ação para quando os botões PEDRA/PAPEL/TESOURA sao pressionados
	actionOnClick_papel: function (button) {
		//Lógica serve para os botões somente funcionarem quando pressionados uma unica vez
		//se retirado o if, jogador pode pressionar diversas vezes os botões até que ganhe a partida!
		//Se aplica aos três actionOnClick
		if(game.global.wild_appeared == game.monsters[game.global.sorteado]) {
			this.jokenpo(2);//PAPEL
		}
	},
	actionOnClick_pedra: function (button) {
		if(game.global.wild_appeared == game.monsters[game.global.sorteado]) {
			this.jokenpo(0);//PEDRA
		}


	},
	
	actionOnClick_tesoura: function (button) {
		if(game.global.wild_appeared == game.monsters[game.global.sorteado]) {
		this.jokenpo(1);//TESOURA
		}

	},
	
	actionOnClick_hadouken: function (button) {
		//CHEAT do jogo! chama a função ganhou sem fazer o sorteio para escolha da maquina
		this.music.stop();
		this.ganhou();
	},

	perdeu: function(){
		//toca a musica da derrota
		this.music = game.add.audio('lose');
		this.music.volume = .5;
		this.music.play();
		//PASSA o texto que será escrito na tela para a função
		this.finalBatalha("PERDEU");
	},

	empatou: function(){
		//toca a musica do empate
		this.music = game.add.audio('draw');
		this.music.volume = .5;
		this.music.play();
		//PASSA o texto que será escrito na tela para a função
		this.finalBatalha("EMPATOU");
	},

	ganhou: function(){
		//removendo item sorteado do array.
		var removedItem = game.monsters.splice(game.global.sorteado, 1); 
		console.log("ARRAY DEPOIS DA REMOÇAO: " + game.monsters);
		//insere item sorteado no array CARDS, onde é armazenado os cards capturados.
		game.cards.unshift(game.global.wild_appeared);
		//toca a musica da vitoria
		this.music = game.add.audio('win');
		this.music.volume = .5;
		this.music.play();
		//PASSA o texto que será escrito na tela para a função
		this.finalBatalha("GANHOU");
	},

	finalBatalha: function(texto){
		// escreve o texto passado como argumento nas funções ganhou/perdeu/empatou
		this.txt = game.add.text(50,600,texto,{font:'15px emulogic',fill:'#fff'});
		this.txt.anchor.set(0,.5);
		this.txt.alpha = 0;
		//em 0,5s começa a aparecer o texto piscante no topo da tela 
		//jogador pode apertar a tecla enter e retornar para o jogo
		game.time.events.add(500, function(){
		game.add.tween(this.txt).to({alpha:1},500).to({alpha:0},500).loop().start();
			//prcura pela tecla ENTER
			var enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
			enterKey.onDown.addOnce(this.fim,this);

		}, this);

		//APOS 5s chama a função fim automaticamente
		game.time.events.add(5000,this.fim, this);

	},
	
	//Mostra a escolha feita pela maquina, ao lado do card, após o jogador pressionar um dos botoes
	maq: function(num){
		//carrega a imagem da escolha da maquina ao lado do card.
		var img_maquina;
		if(num === 0){ //caso tenha escolhido PEDRA
			img_maquina = game.add.button(game.world.centerX+150, 180, 'btn_pedra', this.actionOnClick_hadouken, this, 1, 2, 0);
		} 
		if (num === 1){ //caso tenha escolhido TESOURA
			img_maquina = game.add.button(game.world.centerX+150, 180, 'btn_tesoura', this.actionOnClick_hadouken, this, 1, 2, 0);
		} 
		if (num === 2){ //caso tenha escolhido PAPEL
			img_maquina = game.add.button(game.world.centerX+150, 180, 'btn_papel', this.actionOnClick_hadouken, this, 1, 2, 0);
		}
		img_maquina.anchor.set(0.5);
	},

//função fim, retorna para o jogo, quando chamada ou, caso o jogador tenha completado as cards caputradas, vai para a tela de fim de jogo
	fim: function(){
		//pausa a musica
		this.music.stop();

		//Logica de fim de jogo
		//caso o vetor game.monsters esteja vazio.
		//encerra o jogo, pois não existe mais nada a capturar
		if(game.monsters.length === 0) {
			//FINALIZADO
			game.state.start('end');
			console.log("FINALIZADO!!!!!!");
		} else {
		game.state.start('stage1');
		}
	}
	
};
