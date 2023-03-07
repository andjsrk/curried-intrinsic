import { curried } from 'create-curried'

export const toString = curried(Number.prototype.toString)
	.takes(0)
	.takesThis()
	.generate<
		(radix: number | undefined) =>
			(number: number) =>
				string
	>()
