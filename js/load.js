var loadState = {
	preload: function(){
		var txtLoading = game.add.text(game.world.centerX,150,'LOADING...',{font:'15px emulogic',fill:'#fff'});
			txtLoading.anchor.set(.5);
	
		var progressBar = game.add.sprite(game.world.centerX,250,'progressBar');
			progressBar.anchor.set(.5);
			
		game.load.setPreloadSprite(progressBar);
		
		game.load.image('bg','img/bg.png');
		game.load.image('bgVERDE','img/bgVERDE.png');
		game.load.image('bg_battle','img/bg_battle.png');
		game.load.image('bg_verde','img/bg_verde.jpg');


		game.load.image('pok1','cards/pokemon1s.jpg');
		game.load.image('pok2','cards/pokemon2s.jpg');
		game.load.image('pok3','cards/pokemon3s.jpg');
		game.load.image('pok4','cards/pokemon4s.jpg');
		game.load.image('togepi','cards/togepiS.jpg');


		game.load.spritesheet('button', 'img/button_sprite_sheet.png', 193, 71);
		game.load.spritesheet('btn_mapa', 'buttons/btn_mapa.png');
		game.load.spritesheet('btn_cards', 'buttons/btn_cards.png');
		game.load.spritesheet('btn_sound', 'buttons/btn_sound.png');



		game.load.spritesheet('btn_papel1', 'buttons/btn_papel.png');
		game.load.spritesheet('btn_pedra1', 'buttons/btn_pedra.png');
		game.load.spritesheet('btn_tesoura1', 'buttons/btn_tesoura.png');
		game.load.spritesheet('btn_hadouken1', 'buttons/btn_hadouken.png');


		game.load.spritesheet('btn_papel', 'buttons/PAPEL-peq.png', 110, 128);
		game.load.spritesheet('btn_pedra', 'buttons/PEDRA-peq.png', 110, 128);
		game.load.spritesheet('btn_tesoura', 'buttons/TESOURA-peq.png', 110, 128);
		game.load.spritesheet('btn_hadouken', 'buttons/HADOUKEN-peq.png', 110, 128);



    	


		game.load.image('block','img/block.png');
		

		game.load.image('grass','img/grass.png');
		game.load.image('house','img/house.png');

		game.load.image('all','img/all.jpeg');
		game.load.image('part','img/part.png');
		
		game.load.spritesheet('coin','img/part.png',32,32);
		game.load.spritesheet('enemy','img/enemy.png',24,40);
		game.load.spritesheet('player','img/player.png',24,32);
		
		game.load.audio('getitem','sfx/getitem.ogg');

		game.load.audio('battle','sfx/chrono-trigger-chronos-theme.mp3');

		game.load.audio('menu','sfx/600ad-yearnings-of-wind.mp3');
		game.load.audio('clannad','sfx/clannad-soundtrack_town_flowoftime_people.mp3');
		game.load.audio('clannad_nagisa','sfx/clannad_soundtrack_track5_nagisa.mp3');
		game.load.audio('angelbeats2','sfx/mymostprecioustreasure.mp3');
		game.load.audio('angelbeats1','sfx/themeofsss.mp3');



		game.load.audio('win','sfx/win.mp3');
		game.load.audio('lose','sfx/lose.mp3');
		game.load.audio('draw','sfx/draw.mp3');


		game.load.audio('loseitem','sfx/loseitem.ogg');
		game.load.audio('music','sfx/music.ogg');
		
		game.physics.startSystem(Phaser.Physics.ARCADE);
	},
	
	create: function(){
		game.global.monsters = 0;
		game.state.start('menu');
	}
};
