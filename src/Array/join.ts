import { curried } from 'create-curried'

export const join = curried(Array.prototype.join)
	.takes(0)
	.takesThis()
	.generate<
		(separator: string | undefined) =>
			(array: ReadonlyArray<unknown>) =>
				string
	>()
