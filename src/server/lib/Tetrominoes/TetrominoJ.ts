import Tetromino, { TetrominoType } from './Tetromino';

export default class TetrominoJ extends Tetromino {
	constructor() {
		super(TetrominoType.J, [
			[1, 0, 0],
			[1, 1, 1],
			[0, 0, 0]
		]);
	}
}
