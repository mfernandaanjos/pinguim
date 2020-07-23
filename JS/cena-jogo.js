import Jogador from "./jogador.js";

export default class CenaJogo extends Phaser.Scene {
    constructor() {
        super({
            key: 'CenaJogo'
        });
    }

    preload() {

    }

    create() {
       // const larguraJogo = this.sys.canvas.width;
       // const alturaJogo = this.sys.canvas.height;
       // this.add.image(larguraJogo/2, alturaJogo/2, 'neve');
       const imagemFundo = this.add.image(0, 0, 'neve');
       imagemFundo.setOrigin(0, 0);

        const plataformas = this.physics.add.staticGroup();
        plataformas.create(1, 250, 'chao').setOrigin(0, 0).refreshBody();
        plataformas.create(0, 80, 'plataforma').setOrigin(0, 0).refreshBody();
        plataformas.create(361, 180, 'plataforma').setOrigin(0, 0).refreshBody();

        this.jogador = new Jogador(this);
        this.physics.add.collider(this.jogador.sprite, plataformas);

        this.teclas = this.input.keyboard.createCursorKeys();
    }

    update() {
        // cria um atalho pra evitar ficar digitando "this.jogador.sprite"
        const jogador = this.jogador.sprite;

        // setas da esquerda, direita (ou sem movimento)
        if (this.teclas.left.isDown) {
            jogador.setVelocityX(-100);
            jogador.setFlip(true, false)
            jogador.anims.play('esquerda', true);
        }
        else if (this.teclas.right.isDown) {
            jogador.setVelocityX(100);
            jogador.setFlip(false, false)
            jogador.anims.play('direita', true);
        } 

        // seta para cima fazendo pular, mas só se estiver no chão
        if (this.teclas.up.isDown && jogador.body.touching.down) {
            jogador.setVelocityY(-100);
            jogador.anims.play('pulando')
        }
    }
}