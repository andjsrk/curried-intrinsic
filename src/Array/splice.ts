import { curried } from 'create-curried'

export const splice = curried(Array.prototype.splice)
	.takes(1)
	.takes(0)
	.takesRest()
	.takesThis()
	.generate<
		(deleteCount: number | undefined) =>
			(start: number) =>
				<T>(items: Array<T>) =>
					(array: Array<T>) =>
						Array<T>
	>()
