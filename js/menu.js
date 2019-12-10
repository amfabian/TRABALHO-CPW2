var menuState = {
	create: function(){
		this.music = game.add.audio('menu');
		this.music.loop = true;
		this.music.volume = .1;
		this.music.play();
		
		//game.global.score = 0;
		
		//PERSISTENCIA NAO ESTA DANDO CERTO!
		/*
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
		
		var txtCards = game.add.text(game.world.centerX,350,'CARDS CAPTURADOS ' + game.cards.length,{font:'20px emulogic',fill:'#D26111'});
			txtCards.anchor.set(.5);
			txtCards.alpha = 0;
		
	
		var txtJokenpo = game.add.text(game.world.centerX,150,'Jokenpo',{font:'40px emulogic',fill:'#fff'});
			txtJokenpo.anchor.set(.5);
			
		var txtPressStart = game.add.text(game.world.centerX,550,'APERTE ENTER',{font:'20px emulogic',fill:'#fff'});
			txtPressStart.anchor.set(.5);
			
		game.add.tween(txtPressStart).to({y:250},1000).start();
		
		game.time.events.add(1000,function(){
			game.add.tween(txtCards).to({alpha:1},500).to({alpha:0},500).loop().start();
		
			var enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
				enterKey.onDown.addOnce(this.startGame,this);
		},this);
	},
	
	startGame: function(){
		this.music.stop();
		game.state.start('stage1');
	}
};
