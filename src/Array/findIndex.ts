import { curried } from 'create-curried'
import type { ArrayFnArgs } from './_types'

export const findIndex = curried(Array.prototype.findIndex)
	.takes(0)
	.takesThis()
	.generate<
		<T>(callbackFn: (...args: ArrayFnArgs<T>) => unknown) =>
			(array: ReadonlyArray<T>) =>
				number
	>()
