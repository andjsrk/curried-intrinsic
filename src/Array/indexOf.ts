import { curried } from 'create-curried'

export const indexOf = curried(Array.prototype.indexOf, 2)
	.takes(1)
	.takes(0)
	.takesThis()
	.generate<
		(fromIndex: number | undefined) =>
			<T>(searchElement: T) =>
				(array: ReadonlyArray<T>) =>
					number
	>()
