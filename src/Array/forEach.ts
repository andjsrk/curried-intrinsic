import { curried } from 'create-curried'
import type { ArrayFnArgs } from './_types'

export const forEach = curried(Array.prototype.forEach)
	.takes(0)
	.takesThis()
	.generate<
		<T>(callbackFn: (...args: ArrayFnArgs<T>) => void) =>
			(array: ReadonlyArray<T>) =>
				void
	>()
