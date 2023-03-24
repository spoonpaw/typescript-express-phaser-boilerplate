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
(() => new Phaser.Game(config))();

