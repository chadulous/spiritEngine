import GameObject from './GameObject'

export default abstract class Behavior {
	// @ts-ignore (ignore not defined in constructor, it is defined later)
	object: GameObject;
	// @ts-ignore (ignore not defined in constructor, it is defined later)
	id: string;
	constructor() {}
	onCreate() {}
	onframeStart() {}
	onframeEnd() {}
    onKeyPressed() {}
}

class PlayerController extends Behavior {
	speed: number = 5;
	constructor() {
		super();
	}

	onCreate() {
		console.log(`Object ${this.object.id} created in Game.`);
	}

	onframeStart() {
		console.log(
			`Frame start for object ${this.object.id} in Game.`
		);
	}

	onframeEnd() {
		console.log(`Frame end for object ${this.object.id} in Game.`);
	}
}