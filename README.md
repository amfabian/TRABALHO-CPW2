# TRABALHO - Construções de Páginas Web 2
## IFRS - POA

Jogo web feito com phaser.io

#### Trabalho dividido em diferentes arquivos (em ordem de carregamento):

**index.html:** Arquivo HTML que posiciona a tela do jogo na página WEB e aponta para os demais arquivos.

**game.js:** Primeiro arquivo na “árvore” do jogo, carrega os demais por transição e é o responsável por armazenar os dados globais. Inicia o boot.js.

**boot.js:** Carrega uma barra de progresso, também responsável por iniciar o arquivo load.js.

**load.js:** Responsável por carregar todos os recursos do jogo, tais como imagens (botões, planos de fundo, sprites), sons e demais elementos, assim como o arquivo seguinte, menu.js.

**menu.js:** Carrega a tela de início/menu com algumas informações como o nome do jogo, o texto pedindo para apertar a tecla “ENTER” para iniciar o game e a quantidade de cards já obtidos. Inicia também o arquivo stage1.js

**stage1.js:** Arquivo principal do jogo. Monta o mapa com o cenário e o jogador. Possui algoritmo para aleatorizar o local onde aparecerá os personagens inimigos, controle de movimento do jogador com persistência da posição do mesmo e atalhos de teclado não documentados(!). 

**battle.js:** Maior desafio do jogo. Esse arquivo carrega a tela onde será realizada a batalha jokenpo, implementa botões onde o jogador pode fazer a sua escolha e a lógica para o inimigo, caso o jogador vença, o novo personagem será armazenado e disponibilizado no próximo arquivo. Retorna para o jogo depois de apresentar o resultado da batalha.Também possui funções não documentadas.

**card.js:** Implementa a apresentação do rol de cards que o jogador possui. Cada card representa um personagem vencido e obtido. Possui fixo apenas os lugares de cada card.

**end.js:** Tela de final do jogo, somente disponível após o jogador obter todos os cards/personagens disponíveis. Habilita a ida para a tela Sound Test com o arquivo sound.js

**sound.js:** Sound Test, executa todos os arquivos da trilha sonora do jogo.


**phaser.min.js:** framework utilizado no trabalho. Obtido no site phaser.io, versão 2.7.5

#### Arquivo battle.js em detalhes:

**Função** **create** que carrega todos os elementos: Sons, monta o cenário, textos, sprite do personagem/card inimigo, botões de ação para a partida jokenpo, e atalhos de teclado, 

**Função** **jokenpo** é chamada após o jogador escolher uma das opções, Pedra, Tesoura, Papel ou ??????. A opção pode ser realizada apertando um dos botões disponíveis na tela ou um atalho de teclado, sendo P, O ou I, respectivamente.Utiliza função Math.random para a máquina fazer a sua escolha contra o jogador. Pausa a música e chama a função adequada para os casos de empate, vitória ou derrota do jogador. 

**Funções de vitória, derrota, ou empate**: Apenas tocam a música respectiva e chamam a função (FinalBatalha) que irá mostrar ao jogador o que aconteceu. Excepcionalmente a função da vitória do jogador armazena o novo personagem no array de personagens obtidos pelo jogador, utilizando o unshift.

**Função Final Batalha:** Mostra ao jogador o resultado. Permite que o jogador aperte enter e retorne para o mapa e continue sua caçada, caso o jogador tenha coletados todos os personagens/cards encaminha-o alegremente para a tela de fim de jogo. Após cinco segundos a ação é realizada automaticamente sem a necessidade de intervenção do jogador. A saída da tela é realizada com a ajuda de uma função auxiliar (função fim).

**Função maq:** Apresenta para o jogador a escolha da “máquina” na batalha de jokempo


#### Sobre o Sound Test

Disponível somente após o jogador coletar todos os personagens/cards do jogo. Permite tocar todas as músicas apresentadas. Todas as telas de jogo tem músicas, incluindo efeitos sonoros quando o jogador encontra um personagem no mapa, quando na batalha do jokenpo, existe uma música para cada resultado.

#### Sobre funções não documentadas

Utilizadas para agilizar a depuração do jogo durante o desenvolvimento, foram mantidas porque sim. Continuarão sendo não documentadas apesar de aparecer na documentação.

#### Ainda sobre as funções não documentadas

Tente a sorte.


#### Modo de jogar

Aperte ENTER para iniciar.
A tela do jogo mostra o mapa no centro, ocupando quase toda a tela e o jogador dentro do mapa. No canto inferior direito o número de cards já obtidos e no esquerdo um botão para a tela que mostra a lista de cards. Jogador se movimenta livremente até os limites do mapa com os direcionais do teclado. Quando encontrar algum personagem no mapa iniciará a batalha.
Na tela de batalha o jogador poderá apertar um dos botões na parte inferior da tela para fazer uma de suas opções (pedra, papel ou tesoura) e poderá ver o personagem que enfrentará na parte superior da tela. O resultado da batalha aparecerá piscando abaixo dos botões e o jogador retornará para o mapa após cinco segundos ou, caso tenha coletado todos cards, para a tela de encerramento.
Na tela de cards o jogador poderá ver seus cards e o nome deles enfileirados em duas linhas de cinco colunas cada.
Após encerrar o jogo o jogador poderá apertar o botão para a tela de teste de som ainda na tela de encerramento e somente nela. Na tela de teste de som o jogador poderá reproduzir as músicas utilizadas no jogo.
