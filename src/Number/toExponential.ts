import { curried } from 'create-curried'

export const toExponential = curried(Number.prototype.toExponential)
	.takes(0)
	.takesThis()
	.generate<
		(fractionDigits: number | undefined) =>
			(number: number) =>
				string
	>()
