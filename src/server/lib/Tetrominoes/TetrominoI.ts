import Tetromino, { TetrominoType } from './Tetromino';

export default class TetrominoI extends Tetromino {
	constructor() {
		super(
			TetrominoType.I,
			[
				[0, 0, 0, 0],
				[1, 1, 1, 1],
				[0, 0, 0, 0],
				[0, 0, 0, 0]
			],
			[
				[
					[1, 0],
					[1, 1],
					[1, 2],
					[1, 3]
				],
				[[3, 2]],
				[
					[2, 0],
					[2, 1],
					[2, 2],
					[2, 3]
				],
				[[3, 1]]
			]
		);
	}
}
