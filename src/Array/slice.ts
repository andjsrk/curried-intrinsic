import { curried } from 'create-curried'

export const slice = curried(Array.prototype.slice)
	.takes(1)
	.takes(0)
	.takesThis()
	.generate<
		(end: number | undefined) =>
			(start: number | undefined) =>
				<T>(array: ReadonlyArray<T>) =>
					Array<T>
	>()
