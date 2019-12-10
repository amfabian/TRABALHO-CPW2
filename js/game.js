var game = new Phaser.Game(850,650,Phaser.CANVAS);

	game.global = {
	
		xPlayer: 375,
		yPlayer: 450,
		sorteado: 0, //?? NECESSARIO? SIM!!! utilizado para consertar bug que...
		//...permitia jogador pressionar diversas vzs os botoes ação na batalha
		wild_appeared: "pok0"
	};

	//vetor de cards já caputadas
	game.cards = []; 

	//vetor de cards disponiveis para captura.
	game.monsters = ['Pikachu', 'Raichu', 'Charmander', 'Squirtle', 'Bulbassauro','Agumon','Angewomon','Jigglypuff','Uno', 'Togepi'];
	
	//adiciona os states ou telas/arquivos do jogo
	game.state.add('boot',bootState);
	game.state.add('battle',battleState);
	game.state.add('card',cardState);
	game.state.add('sound',soundState);
	game.state.add('load',loadState);
	game.state.add('menu',menuState);
	game.state.add('stage1',stage1State);
	game.state.add('end',endState);
	game.state.start('boot');
