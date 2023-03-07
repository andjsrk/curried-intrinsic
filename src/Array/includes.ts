import { curried } from 'create-curried'

export const includes = curried(Array.prototype.includes, 2)
	.takes(1)
	.takes(0)
	.takesThis()
	.generate<
		(fromIndex: number | undefined) =>
			<T>(searchElement: T) =>
				(array: ReadonlyArray<T>) =>
					number
	>()
