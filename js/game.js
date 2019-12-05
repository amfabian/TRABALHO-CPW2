var game = new Phaser.Game(850,650,Phaser.CANVAS);

	game.global = {
		score: 0,
		highScore: 0,
		xPlayer: 375,
		yPlayer: 450,
		sorteado: 0, //?????? NECESSARIO???
		wild_appeared: "pok0"
	};

	game.cards = []; //vetor de cartas em char TROCAR DE NOME

	game.monsters = ['pok1', 'pok2', 'pok3', 'pok4', 'togepi'];

	game.state.add('boot',bootState);
	game.state.add('battle',battleState);
	game.state.add('card',cardState);
	game.state.add('sound',soundState);





	game.state.add('load',loadState);
	game.state.add('menu',menuState);
	game.state.add('stage1',stage1State);
	
	
	game.state.add('end',endState);
	
	game.state.start('boot');
