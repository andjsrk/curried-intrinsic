import { curried } from 'create-curried'
import { splice } from '../splice'

export const remove = curried(Array.prototype.splice)
	.takes(1)
	.takes(0)
	.takesThis()
	.generate<
		(deleteCount: number | undefined) =>
			(start: number) =>
				<T>(array: Array<T>) =>
					Array<T>
	>()
export const removeOne = remove(1)
export const insert = splice(0)
