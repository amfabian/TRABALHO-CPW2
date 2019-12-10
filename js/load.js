var loadState = {
	preload: function(){
		var txtLoading = game.add.text(game.world.centerX,150,'LOADING...',{font:'15px emulogic',fill:'#fff'});
			txtLoading.anchor.set(.5);

			//Barra de progresso
		var progressBar = game.add.sprite(game.world.centerX,250,'progressBar');
			progressBar.anchor.set(.5);
		game.load.setPreloadSprite(progressBar);

		//CARREGA PLANOS DE FUNDO
		game.load.image('bg','img/bg.png');
		game.load.image('bgVERDE','img/bgVERDE.png');
		game.load.image('bg_battle','img/bg_battle.png');
		game.load.image('bg_sound','img/bg_sound.png');
		game.load.image('bg_verde','img/bg_verde.jpg');

		//CARREGA CARDS
		game.load.image('Pikachu','cards/Pikachu.jpg');
		game.load.image('Charmander','cards/Charmander.jpg');
		game.load.image('Bulbassauro','cards/Bulbassauro.jpg');
		game.load.image('Squirtle','cards/Squirtle.jpg');
		game.load.image('Togepi','cards/Togepi.jpg');
		game.load.image('Pichu','cards/Pichu.jpg');
		game.load.image('Raichu','cards/Raichu.jpg');
		game.load.image('Charizard','cards/Charizard.jpg');
		game.load.image('Butterfree','cards/Butterfree.jpg');
		game.load.image('Caterpie','cards/Caterpie.jpg');
		game.load.image('Jigglypuff','cards/Jigglypuff.jpg');
		game.load.image('Agumon','cards/Agumon.jpg');
		game.load.image('Angewomon','cards/Angewomon.jpg');
		game.load.image('Uno','cards/Uno.png');


		//CARREGA BOTOES - para alternar entre telas do jogo
		game.load.spritesheet('btn_mapa', 'buttons/btn_mapa.png');
		game.load.spritesheet('btn_cards', 'buttons/btn_cards.png');
		game.load.spritesheet('btn_sound', 'buttons/btn_sound.png');
		//botoes para a tela de batalha - somente desenho
		game.load.spritesheet('btn_papel1', 'buttons/btn_papel.png');
		game.load.spritesheet('btn_pedra1', 'buttons/btn_pedra.png');
		game.load.spritesheet('btn_tesoura1', 'buttons/btn_tesoura.png');
		game.load.spritesheet('btn_hadouken1', 'buttons/btn_hadouken.png');
		//botoes para a tela de batalha - somente texto
		game.load.spritesheet('btn_papel', 'buttons/PAPEL-peq.png', 110, 128);
		game.load.spritesheet('btn_pedra', 'buttons/PEDRA-peq.png', 110, 128);
		game.load.spritesheet('btn_tesoura', 'buttons/TESOURA-peq.png', 110, 128);
		game.load.spritesheet('btn_hadouken', 'buttons/HADOUKEN-peq.png', 110, 128);
		//botoes para sound test
		game.load.image('btn_music_menu', 'buttons/btn_music_menu.png');
		game.load.image('btn_music_mapa', 'buttons/btn_music_mapa.png');
		game.load.image('btn_music_battle', 'buttons/btn_music_battle.png');
		game.load.image('btn_music_cards', 'buttons/btn_music_cards.png');
		game.load.image('btn_music_fim', 'buttons/btn_music_fim.png');
		game.load.image('btn_music_sound', 'buttons/btn_music_sound.png');
		//-------------------------------FIM

		//CARREGA IMAGENS DO CENARIO
		game.load.image('block','img/block.png');
		game.load.image('grass','img/grass.png');
		game.load.image('house','img/house.png');
		game.load.image('all','img/all.jpeg');
		game.load.image('part','img/part.png');
		
		//CARREGA SPRITES
		game.load.spritesheet('coin','img/part.png',32,32);
		game.load.spritesheet('player','img/player.png',24,32);
		
		//CARREGA ARQUIVOS DE AUDIO - MUSICAS 
		game.load.audio('getitem','sfx/getitem.ogg');
		game.load.audio('battle','sfx/chrono-trigger-chronos-theme.mp3');
		game.load.audio('menu','sfx/600ad-yearnings-of-wind.mp3');
		game.load.audio('clannad','sfx/clannad-soundtrack_town_flowoftime_people.mp3');
		game.load.audio('clannad_nagisa','sfx/clannad_soundtrack_track5_nagisa.mp3');
		game.load.audio('angelbeats2','sfx/mymostprecioustreasure.mp3');
		game.load.audio('angelbeats1','sfx/themeofsss.mp3');
		//CARREGA ARQUIVOS DE AUDIO - EFEITOS
		game.load.audio('win','sfx/win.mp3');
		game.load.audio('lose','sfx/lose.mp3');
		game.load.audio('draw','sfx/draw.mp3');


		//inicia a fisica utilizada pelo jogo - ARCADE
		game.physics.startSystem(Phaser.Physics.ARCADE);
	},
	
	create: function(){
		game.global.monsters = 0;
		game.state.start('menu');
	}
};
