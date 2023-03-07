import { curried } from 'create-curried'
import type { ArrayFnArgs } from './_types'

export const map = curried(Array.prototype.map)
	.takes(0)
	.takesThis()
	.generate<
		<T, U>(callbackFn: (...args: ArrayFnArgs<T>) => U) =>
			(array: ReadonlyArray<T>) =>
				Array<U>
	>()
