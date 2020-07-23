export default class CenaCarregamento extends Phaser.Scene {
    constructor() {
        super({
            key: 'CenaCarregamento'
        });
    }

    preload() {
        const larguraJogo = this.sys.canvas.width;
        const barraDeProgresso = this.add.graphics();

        // registra evento de progresso para atualizar a barra de progresso
        const larguraBarra = 0.8 * larguraJogo;
        this.load.on('progress', (value) => {
            barraDeProgresso.clear();
            // barra branca preenchida
            barraDeProgresso.fillStyle(0xffffff, 1);
            barraDeProgresso.fillRect((larguraJogo - larguraBarra) / 2, this.sys.game.config.height / 2, larguraBarra * value, 20);
            // contorno amarelo
            barraDeProgresso.lineStyle(4, 0xffff00, 1);
            barraDeProgresso.strokeRect((larguraJogo - larguraBarra) / 2, this.sys.game.config.height / 2, larguraBarra, 20);
        });

        this.load.on('complete', () => {
            this.scene.start('CenaJogo');
        });

        // todos os recursos que devem ser pré-carregados
        this.load.image('neve', 'imgs/neve.jpg');
        this.load.image('chao', 'imgs/chao.png');
        this.load.image('plataforma', 'imgs/plataforma.png');
        this.load.spritesheet('pinguim', 'imgs/pinguim.png', { frameWidth: 53, frameHeight: 71 });
    }

    create() {

    }

    update() {

    }
}