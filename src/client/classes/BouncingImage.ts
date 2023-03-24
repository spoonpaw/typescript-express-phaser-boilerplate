// Custom class extending Phaser's Image object to include a velocity vector
import Phaser from 'phaser';

export default class BouncingImage extends Phaser.GameObjects.Image {
	velocity = new Phaser.Math.Vector2();
}
