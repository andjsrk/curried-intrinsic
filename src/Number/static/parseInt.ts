import { curried } from 'create-curried'

export const parseInt = curried(Number.parseInt)
	.takes(1)
	.takes(0)
	.generate<
		(radix: number | undefined) =>
			(string: string) =>
				number
	>()
