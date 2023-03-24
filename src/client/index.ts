// src/client/index.ts

import Phaser from 'phaser';
import MainScene from './scenes/MainScene';

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
	scene: [MainScene],
};

// Create a new Phaser game instance using the specified configuration object
let game: Phaser.Game;

/**
 * Initializes and starts the game when the window is loaded.
 */
window.addEventListener('load', () => {
	game = new Phaser.Game(config);
});

/**
 * Destroys the game instance before the window is unloaded.
 */
window.addEventListener('beforeunload', () => {
	game.destroy(true, false);
});

