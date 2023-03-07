import { curried } from 'create-curried'
import type { ArrayFnArgs } from './_types'

export const some = curried(Array.prototype.some)
	.takes(0)
	.takesThis()
	.generate<
		<T>(callbackFn: (...args: ArrayFnArgs<T>) => unknown) =>
			(array: ReadonlyArray<T>) =>
				boolean
	>()
