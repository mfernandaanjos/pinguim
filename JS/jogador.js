export default class Jogador {
    constructor(cena) {
        this.cena = cena;
        this.sprite = cena.physics.add.sprite(0, 0, 'pinguim');
        this.sprite.body.setSize(53, 69);
        this.sprite.setBounce(0.2)
        this.sprite.setCollideWorldBounds(true);

        cena.anims.create({
            key: 'direita',
            frames: cena.anims.generateFrameNumbers('pinguim', { start: 1, end: 11 }),
            frameRate: 4,
            repeat: -1
        });

        cena.anims.create({
            key: 'esquerda',
            frames: cena.anims.generateFrameNumbers('pinguim', { start: 1, end: 11 }),
            frameRate: 4,
            repeat: -1
        });
    
    }
}