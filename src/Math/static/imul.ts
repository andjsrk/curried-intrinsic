import { curried } from 'create-curried'

export const imul = curried(Math.imul)
	.takes(0)
	.takes(1)
	.generate<
		(a: number) =>
			(b: number) =>
				number
	>()
