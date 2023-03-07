import { curried } from 'create-curried'

export const toPrecision = curried(Number.prototype.toPrecision)
	.takes(0)
	.takesThis()
	.generate<
		(precision: number | undefined) =>
			(number: number) =>
				string
	>()
