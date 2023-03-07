import { curried } from 'create-curried'

export const toFixed = curried(Number.prototype.toFixed)
	.takes(0)
	.takesThis()
	.generate<
		(digits: number | undefined) =>
			(number: number) =>
				string
	>()
