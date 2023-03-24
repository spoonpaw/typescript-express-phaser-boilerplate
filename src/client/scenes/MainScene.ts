import BouncingImage from '../classes/BouncingImage';

export default class MainScene extends Phaser.Scene {
	private image!: BouncingImage;
	private width!: number;
	private height!: number;

	constructor() {
		super('MainScene');
	}

	// Scene preload function
	preload() {
		this.load.image('head', '/assets/head.png');
	}

	// Scene creation function
	create() {
		this.width = Number(this.game.config.width);
		this.height = Number(this.game.config.height);
		this.image = new BouncingImage(this, 400, 300, 'head');
		this.image.setScale(0.5);
		this.image.setOrigin(0.5);
		this.image.velocity = new Phaser.Math.Vector2((Math.random() * 5) - 5, (Math.random() * 5) - 5);
		this.add.existing(this.image);
	}

	// Scene update function
	update() {
		this.image.x += this.image.velocity.x;
		this.image.y += this.image.velocity.y;

		this.image.angle += 2; // Rotate the image by 2 degrees per frame

		// Check for horizontal boundaries and reverse horizontal velocity if necessary
		if (this.image.x < this.image.width / 2 || this.image.x > this.width - (this.image.width / 2)) {
			this.image.velocity.x *= -1;
		}

		// Check for vertical boundaries and reverse vertical velocity if necessary
		if (this.image.y < this.image.height / 2 || this.image.y > this.height - (this.image.height / 2)) {
			this.image.velocity.y *= -1;
		}
	}
}
