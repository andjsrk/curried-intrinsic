import { curried } from 'create-curried'

export const at = curried(Array.prototype.at)
	.takes(0)
	.takesThis()
	.generate<
		(index: number) =>
			<T>(array: Array<T>) =>
				T | undefined
	>()
