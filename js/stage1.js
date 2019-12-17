var stage1State = {
	create: function(){
		
		//Música e sons
		this.music = game.add.audio('clannad_nagisa');
		this.music.loop = true;
		this.music.volume = .5;
		this.music.play();
		//efeito sonoro
		this.sndCard = game.add.audio('getitem');
		this.sndCard.volume = .5;

		//carrega plano de fundo
		game.add.sprite(0,0,'bg');
		
		//Lista de atalhos de teclado
		var enterKeyA = game.input.keyboard.addKey(Phaser.Keyboard.A);
		var enterKeyS = game.input.keyboard.addKey(Phaser.Keyboard.S);
		var enterKeyD = game.input.keyboard.addKey(Phaser.Keyboard.D);
		enterKeyA.onDown.addOnce(this.keyA, this);
		enterKeyS.onDown.addOnce(this.keyS, this);
		enterKeyD.onDown.addOnce(this.keyD, this);
		
		this.onGame = true; //////????????
		
		//CARREGA O CENARIO
		//matriz com o local do itens no cenario
		//ou vetor de vetores :P
		//itens: 0 e 1 = nada (não utilizados, ficam para o DLC)
		//2 - PLAYER
		//3 - Lugares possiveis para aparecer o ponto/particula
		//4 - BLOCOS
		//5 - HOUSES
		//6 - BURACOS
		this.map = [ 
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,1,1,1,5,1,1,5,1,1,1,1,1,5,1,1,0],
			[0,1,3,0,0,0,0,6,0,6,0,0,0,0,3,1,0],
			[0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,6,0],
			[0,1,0,1,3,0,1,3,5,0,1,0,3,1,0,1,0],
			[0,1,0,0,0,1,1,1,1,0,1,0,5,5,0,1,0],
			[0,1,0,0,0,6,1,0,2,0,0,6,0,0,0,1,0],
			[0,1,0,1,3,0,6,0,0,1,0,0,3,0,0,1,0],
			[0,1,0,1,5,5,5,0,1,1,0,0,1,5,0,1,0],
			[0,1,3,0,0,6,0,0,3,1,0,5,0,0,3,1,0],
			[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0], 
			[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
			[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]
		];
		this.grass = game.add.group();
		this.grass.enableBody = true;
		this.blocks = game.add.group();
		this.blocks.enableBody = true;

		this.houses = game.add.group();
		this.houses.enableBody = true;

		this.hole = game.add.group();
		this.hole.enableBody = true;
		this.cardPositions = [];
		//percorre a matriz carregando a grama, os blocos inferiores, as casas, o jogador e o ponto
		for(var row in this.map){
			for(var col in this.map[row]){
				var tile = this.map[row][col];
				var x = col * 50;
				var y = row * 50;
				if(true){
					//carrega a grama, carregada sob todos os demais itens
					var grass = this.grass.create(x,y,'grass');
				} 
				if(tile === 2){
					//carrega o player
					this.player = game.add.sprite(game.global.xPlayer,game.global.yPlayer,'player');
					game.physics.arcade.enable(this.player);
					//animações do sprite 
					this.player.animations.add('goDown',[0,1,2,3,4,5,6,7],12,true);
					this.player.animations.add('goUp',[8,9,10,11,12,13,14,15],12,true);
					this.player.animations.add('goLeft',[16,17,18,19,20,21,22,23],12,true);
					this.player.animations.add('goRight',[24,25,26,27,28,29,30,31],12,true);
				} 
				if(tile === 3){ 
					//carrega o ponto
					var position = {
						x: x + 25,
						y: y + 25
					};
					this.cardPositions.push(position);
				}
				if(tile === 4){
					//carrega os blocos, parte inferior do jogo
					var block = this.blocks.create(x,y,'block');
					block.body.immovable = true;
				}
				if(tile === 5){
					//carrega as casas
					var house = this.houses.create(x,y,'house');
					house.body.immovable = true;
				}
				if(tile === 6){
					//carrega as casas
					var hole = this.hole.create(x,y,'hole');
					hole.body.immovable = true;
				}

			}
		}

		//texto do titulo da tela e quantidade de cards capturados padrao nas telas MApa, card e battle.
		var txtTitulo = game.add.text(game.world.centerX, 600, 'MAPA', { font: '20px emulogic', fill: '#fff' });
		txtTitulo.anchor.set(0.5, 0.5);
		this.txtCards = game.add.text(game.world.width - 15,600,'CARDS: ' + game.cards.length,{font:'15px emulogic',fill:'#fff'});
		this.txtCards.anchor.set(1,0.5);

		//botao para alternar para os cards
		var button;
		button = game.add.button(50, 600, 'btn_cards', this.keyA, this, 2, 1, 0);
		button.anchor.set(0,0.5);
			
		//Criar o card
		this.card = {};
		//newposition serve para "randomizar" a posição
		this.card.position = this.newPosition();
		this.card = game.add.sprite(this.card.position.x,this.card.position.y,'coin');
		this.card.anchor.set(.5);

		game.physics.arcade.enable(this.card);
		
		//inicializa a variavel card
		this.cards = 0;
		
		//controles
		this.controls = game.input.keyboard.createCursorKeys();
		
		//Partículas
		this.emitter = game.add.emitter(0,0,15);
		this.emitter.makeParticles('part');
		this.emitter.setXSpeed(-50,50);
		this.emitter.setYSpeed(-50,50);
		this.emitter.gravity.y = 0;
		
		//Monstros
		this.monsters = game.global.monsters;

	},
	//função do movimento e relação de colisoes do jogo
	update: function(){
		if(this.onGame){
			//colisoes entre o player e as casas e blocos
			game.physics.arcade.collide(this.player,this.blocks);
			game.physics.arcade.collide(this.player,this.houses);
			//colisao com a beirada da tela
			this.player.body.collideWorldBounds = true;
			//para obter o ponto e inciar a batalha
			game.physics.arcade.overlap(this.player,this.card,this.getCard,null,this);
			this.movePlayer();
		}
	},
	
	


	//quadno player e ponto se encontram
	//função getCard é chamada.
	getCard: function(){
		//salva a posição do jogador para retornar no mesmo ponto do mapa
		game.global.xPlayer = this.player.position.x;
		game.global.yPlayer = this.player.position.y;
	
		//escolha randomica de qual monstro do array sera sorteado para a batalha
		//armazena em uma variavel goblal pois ira chamar outro estado/tela/arquivo
		game.global.sorteado = Math.floor(Math.random() * game.monsters.length);
		//apenas armazena o card com base no indice sorteado.
		game.global.wild_appeared = game.monsters[game.global.sorteado];
		
		//particulas quando do evento de encontrar o ponto no jogo
		this.emitter.x = this.player.position.x;
		this.emitter.y = this.player.position.y;
		this.emitter.start(true,500,null,15);
		// 3/4 de segundo para o jogador apreciar as particulas antes da batalha
		game.time.events.add(750,function(){
			//sempre pausa a musica antes de trocar de estado/tela/arquivo
			this.music.stop();
			game.state.start('battle');
			
		},this);
		//play no efeito sonoro do evento de encontrar o ponto
		this.sndCard.play();
		//add um em cards
		this.cards++;
		this.card.position = this.newPosition();
	},
	
	//função de movimento do player
	movePlayer: function(){
		this.player.body.velocity.x = 0;
		this.player.body.velocity.y = 0;
	
		//logica da direção do movimento
		if(this.controls.left.isDown && !this.controls.right.isDown){
			this.player.body.velocity.x = -100;
			this.player.direction = "left";
		} else
		if(this.controls.right.isDown && !this.controls.left.isDown){
			this.player.body.velocity.x = 100;
			this.player.direction = "right";
		}
		
		if(this.controls.up.isDown && !this.controls.down.isDown){
			this.player.body.velocity.y = -100;
			this.player.direction = "up";
		} else
		if(this.controls.down.isDown && !this.controls.up.isDown){
			this.player.body.velocity.y = 100;
			this.player.direction = "down";
		}
		//logica da animação correspondente a direção do movimento
		switch(this.player.direction){
			case "left":
				this.player.animations.play('goLeft'); break;
			case "right":
				this.player.animations.play('goRight'); break;
			case "up":
				this.player.animations.play('goUp'); break;
			case "down":
				this.player.animations.play('goDown'); break;
		}
		//parar a animacao quando o movimento cessa
		if(this.player.body.velocity.x === 0 && this.player.body.velocity.y === 0){
			this.player.animations.stop();
		}
	},
	//funçao para nova posição do ponto no mapa
	newPosition: function(){
		//faz o sorteio da posição.
		var pos = this.cardPositions[Math.floor(Math.random() * this.cardPositions.length)];
		//logica para nao deixar a posiçao se repetir
		while(this.card.position === pos){
			pos = this.cardPositions[Math.floor(Math.random() * this.cardPositions.length)];
		}
		//retorna a nova posição
		return pos;
	},
	
	//alterna para a tela de cards
	keyA: function () { 
		//salva a posição do jogador para retornar no mesmo ponto do mapa
		game.global.xPlayer = this.player.position.x;
		game.global.yPlayer = this.player.position.y;
		this.music.stop(); //pausa a musica
		game.state.start('card'); //inicia o novo estado
		},
	//alterna para a tela de SOUND TEST - NAO DOCUMENTADO
	keyS: function () {
		//salva a posição do jogador para retornar no mesmo ponto do mapa
		game.global.xPlayer = this.player.position.x;
		game.global.yPlayer = this.player.position.y;
		this.music.stop(); //pausa a musica
		game.state.start('sound');//inicia o novo estado
	},
	//alterna para a tela de batalha - NAO DOCUMENTADO
	keyD: function () {
		//salva a posição do jogador para retornar no mesmo ponto do mapa
		game.global.xPlayer = this.player.position.x;
		game.global.yPlayer = this.player.position.y;
		this.music.stop();//pausa a musica
		game.state.start('battle');//inicia o novo estado
	},
};
