import { curried } from 'create-curried'

export const pow = curried(Math.pow)
	.takes(1)
	.takes(0)
	.generate<
		(y: number) =>
			(x: number) =>
				number
	>()
