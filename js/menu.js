var menuState = {
	create: function(){
		//carrega a musica da tela.
		this.music = game.add.audio('menu');
		this.music.loop = true;
		this.music.volume = .1;
		this.music.play();
		
		
		
		//PERSISTENCIA NAO FUNCIONOU ADEQUADAMENTE!
		/*
		//game.global.score = 0;
		if(!localStorage.getItem('jokempo_monsters')){
			console.log("passou");
			localStorage.setItem('jokempo_monsters',game.cards);
		}
		
		if(game.cards.length > localStorage.getItem('jokempo_monsters').length){
			localStorage.setItem('jokempo_monsters',game.cards);
		} else {
			game.cards = localStorage.getItem('jokempo_monsters');
		}
		*/
		//RETIRADO DA VERSAO FINAL
		//carrega texto mostrando quantos cards já foram caputrados
		//var txtCards = game.add.text(game.world.centerX,350,'CARDS CAPTURADOS ' + game.cards.length,{font:'20px emulogic',fill:'#D26111'});
		//	txtCards.anchor.set(.5);
			//txtCards.alpha = 0;

		//carrega NOME DO GAME	
		var txtJokenpo = game.add.text(game.world.centerX,150,'Jokenpo',{font:'40px emulogic',fill:'#fff'});
			txtJokenpo.anchor.set(.5);
		//CARREGA APERTE ENTER	
		var txtPressStart = game.add.text(game.world.centerX,550,'APERTE ENTER',{font:'20px emulogic',fill:'#fff'});
			txtPressStart.anchor.set(.5);
			
		//ADD EFEITOS NO APERTE ENTER 
		game.add.tween(txtPressStart).to({y:250},1000).start();
		game.time.events.add(1000,function(){
			game.add.tween(txtPressStart).to({alpha:1},500).to({alpha:0},500).loop().start();
		
			var enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
				enterKey.onDown.addOnce(this.startGame,this);
		},this);
	},
	//CHAAM O GAME
	startGame: function(){
		this.music.stop();
		game.state.start('stage1');
	}
};
