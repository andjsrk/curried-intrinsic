import { curried } from 'create-curried'

export const fill = curried(Array.prototype.fill, 3)
	.takes(2)
	.takes(1)
	.takes(0)
	.takesThis()
	.generate<
		(end: number | undefined) =>
			(start: number | undefined) =>
				<T>(value: T) =>
					(array: Array<T>) =>
						Array<T>
	>()
