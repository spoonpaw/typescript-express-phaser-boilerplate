import Phaser from 'phaser';

// Custom class extending Phaser's Image object to include a velocity vector
class BouncingImage extends Phaser.GameObjects.Image {
	velocity = new Phaser.Math.Vector2();
}

// Configuration object for the Phaser game instance
const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	scale: {
		mode: Phaser.Scale.ScaleModes.FIT,
	},
	backgroundColor: '#2d2d2d',
	physics: {
		default: 'arcade',
		arcade: {
			gravity: {y: 200},
			debug: false,
		},
	},
	scene: {
		preload,
		create,
		update,
	},
};

let image: BouncingImage;
let width: number;
let height: number;

// Scene preload function
function preload(this: Phaser.Scene) {
	this.load.image('head', '/assets/head.png');
}

// Scene creation function
function create(this: Phaser.Scene) {
	width = Number(this.game.config.width);
	height = Number(this.game.config.height);
	image = new BouncingImage(this, 400, 300, 'head');
	image.setScale(0.5);
	image.setOrigin(0.5);
	image.velocity = new Phaser.Math.Vector2((Math.random() * 5) - 5, (Math.random() * 5) - 5);
	this.add.existing(image);
}

// Scene update function
function update() {
	image.x += image.velocity.x;
	image.y += image.velocity.y;

	image.angle += 2; // Rotate the image by 2 degrees per frame

	// Check for horizontal boundaries and reverse horizontal velocity if necessary
	if (image.x < image.width / 2 || image.x > width - (image.width / 2)) {
		image.velocity.x *= -1;
	}

	// Check for vertical boundaries and reverse vertical velocity if necessary
	if (image.y < image.height / 2 || image.y > height - (image.height / 2)) {
		image.velocity.y *= -1;
	}
}

// Create a new Phaser game instance using the specified configuration object
(() => new Phaser.Game(config))();

