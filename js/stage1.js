var stage1State = {
	create: function(){
		
		//Música e sons
		this.music = game.add.audio('clannad_nagisa');
		this.music.loop = true;
		this.music.volume = .5;
		this.music.play();

		this.sndCoin = game.add.audio('getitem');
		this.sndCoin.volume = .5;

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
		this.maze = [
			[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
			[4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4],
			[4,1,3,0,0,0,0,0,0,0,0,0,0,0,3,1,4],
			[4,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,4],
			[4,1,0,1,3,0,1,3,5,0,1,0,3,1,0,1,4],
			[4,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,4],
			[4,1,0,0,0,0,1,0,2,0,0,0,0,0,0,1,4],
			[4,1,0,1,3,0,0,0,0,1,0,0,3,1,0,1,4],
			[4,1,0,1,1,5,1,0,1,1,0,1,1,1,0,1,4],
			[4,1,3,0,0,0,0,0,3,1,0,0,0,0,3,1,4],
			[4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4], 
			[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
			[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]
		];
		
		this.grass = game.add.group();
		this.grass.enableBody = true;
		this.blocks = game.add.group();
		this.blocks.enableBody = true;
	
		this.coinPositions = [];
		
		for(var row in this.maze){
			for(var col in this.maze[row]){
				var tile = this.maze[row][col];
				
				var x = col * 50;
				var y = row * 50;
				
				if(true){
					var grass = this.grass.create(x,y,'grass');
					
				} 
				if(tile === 2){
					this.player = game.add.sprite(game.global.xPlayer,game.global.yPlayer,'player');
					
					game.physics.arcade.enable(this.player);
					this.player.animations.add('goDown',[0,1,2,3,4,5,6,7],12,true);
					this.player.animations.add('goUp',[8,9,10,11,12,13,14,15],12,true);
					this.player.animations.add('goLeft',[16,17,18,19,20,21,22,23],12,true);
					this.player.animations.add('goRight',[24,25,26,27,28,29,30,31],12,true);
				} 
				if(tile === 3){ //3
					var position = {
						x: x + 25,
						y: y + 25
					};
					this.coinPositions.push(position);
				}
				if(tile === 4){
					var block = this.blocks.create(x,y,'block');
					block.body.immovable = true;
					
				}
				if(tile === 5){
					var block = this.blocks.create(x,y,'block');
					block.body.immovable = true;
					
				}
			}
		}
		//carrega titulo da tela
		var txtTitulo = game.add.text(game.world.centerX, 15, 'MAPA', { font: '20px emulogic', fill: '#fff' });
		txtTitulo.anchor.set(0.5, 0);

		
		
		var button;
		button = game.add.button(50, 580, 'btn_cards', this.keyA, this, 2, 1, 0);
	
		
		
		//Criar o card 
		this.coin = {};
		this.coin.position = this.newPosition();
		this.coin = game.add.sprite(this.coin.position.x,this.coin.position.y,'coin');
		this.coin.anchor.set(.5);
		this.coin.animations.add('spin',[0,1,2,3,4,5,6,7,8,9],10,true).play();
		//this.coin.animations.add('spin',[10],10,true).play();

		game.physics.arcade.enable(this.coin);
		
		//coletar moeda
		this.coins = 0;
		
		
		//controles
		this.controls = game.input.keyboard.createCursorKeys();
		
		//Partículas
		this.emitter = game.add.emitter(0,0,15);
		this.emitter.makeParticles('part');
		this.emitter.setXSpeed(-50,50);
		this.emitter.setYSpeed(-50,50);
		this.emitter.gravity.y = 0;
		
		//Monstrosn
		this.monsters = game.global.monsters;

		this.txtMonsters = game.add.text(game.world.width - 15,600,'CARDS: ' + game.cards.length,{font:'15px emulogic',fill:'#fff'});
		this.txtMonsters.anchor.set(1,0);
	},
	
	update: function(){
		if(this.onGame){
			game.physics.arcade.collide(this.player,this.blocks);
			game.physics.arcade.overlap(this.player,this.coin,this.getCoin,null,this);
			game.physics.arcade.overlap(this.player,this.enemy,this.loseCoin,null,this);
		
			this.movePlayer();
		}
	},
	

	getCoin: function(){
		this.music.stop();
		game.global.xPlayer = this.player.position.x;
		game.global.yPlayer = this.player.position.y;
		
		
		game.monsters.forEach(function (item, indice, array) {
			console.log("IMPRIMIR ARRAY: "+ item, indice);
			//game.add.sprite(vetorX[indice], vetorY[indice], item);

		});
		console.log("MONSTERS2: " + game.cards);

		console.log("ARRAY ANTES DA REMOÇAO: " + game.monsters);
		
		
		game.global.sorteado = Math.floor(Math.random() * game.monsters.length);
		//SORTEIO NOVO POKEMON
		console.log("tamanho: "+game.monsters.length);
		console.log("SORTEIO POKEMON: "+game.monsters[game.global.sorteado]);
		game.global.wild_appeared = game.monsters[game.global.sorteado];
		
		

		
		

		
		this.emitter.x = this.coin.position.x;
		this.emitter.y = this.coin.position.y;
		this.emitter.start(true,500,null,15);
		console.log("tempo");
		game.time.events.add(5000,this.keyD(), this);

		
	
		
		this.sndCoin.play();
		this.coins++;
		
		
		this.coin.position = this.newPosition();
	},
	
	
	
	movePlayer: function(){
		this.player.body.velocity.x = 0;
		this.player.body.velocity.y = 0;
	
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
		
		if(this.player.body.velocity.x === 0 && this.player.body.velocity.y === 0){
			this.player.animations.stop();
		}
	},
	
	newPosition: function(){
		var pos = this.coinPositions[Math.floor(Math.random() * this.coinPositions.length)];
		
		while(this.coin.position === pos){
			pos = this.coinPositions[Math.floor(Math.random() * this.coinPositions.length)];
		}
		
		return pos;
	},
	
	keyA: function () { // ACESSA OS CARDs
		game.global.xPlayer = this.player.position.x;
		game.global.yPlayer = this.player.position.y;
		this.music.stop();

		console.log("PREMIDO BOTAO A")
		game.state.start('card');
		},

	keyS: function () {
		game.global.xPlayer = this.player.position.x;
		game.global.yPlayer = this.player.position.y;
		console.log("PREMIDO BOTAO S");
		this.music.stop();

		game.state.start('end');
	},

	keyD: function () {
		game.global.xPlayer = this.player.position.x;
		game.global.yPlayer = this.player.position.y;
		this.music.stop();

		console.log("PREMIDO BOTAO D")
		game.state.start('battle');
	},

	
	


};
