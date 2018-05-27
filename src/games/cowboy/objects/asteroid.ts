/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2018 Digitsensitive
 * @description  Asteroid: Asteroid
 * @license      Digitsensitive
 */

import { CONST } from "../const/const";

export class Asteroid extends Phaser.GameObjects.Graphics {
  private currentScene: Phaser.Scene;
  private velocity: Phaser.Math.Vector2;
  private radius: number;
  private asteroidRadius: number;
  private sizeOfAsteroid: number;
  private numberOfSides: number;

  public getRadius(): number {
    return this.radius;
  }
  public getBody(): any {
    return this.body;
  }

  constructor(params) {
    super(params.scene, params);

    // variables
    this.currentScene = params.scene;
    this.asteroidRadius = 0;
    this.sizeOfAsteroid = params.size;

    // init shape
    this.initAsteroid(params.x, params.y, this.sizeOfAsteroid);

    // physics
    this.currentScene.physics.world.enable(this, 1);
    this.body.allowGravity = false;
    this.body.setCircle(this.asteroidRadius);

    this.currentScene.add.existing(this);
  }

  private initAsteroid(aX: number, aY: number, aSizeOfAsteroid: number): void {
    this.lineStyle(1, 0xffffff);
    this.fillCircle(aX, aY, aSizeOfAsteroid);

    this.x = aX;
    this.y = aY;
  }
}
