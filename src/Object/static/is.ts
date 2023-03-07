import { curried } from 'create-curried'

export const is = curried(Object.is)
	.takes(0)
	.takes(1)
	.generate<
		(a: unknown) =>
			(b: unknown) =>
				boolean
	>()
