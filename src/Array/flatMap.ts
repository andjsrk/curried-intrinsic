import { curried } from 'create-curried'
import type { ArrayFnArgs } from './_types'

export const flatMap = curried(Array.prototype.flatMap)
	.takes(0)
	.takesThis()
	.generate<
		<T, U>(callbackFn: (...args: ArrayFnArgs<T>) => U | ReadonlyArray<U>) =>
			(array: ReadonlyArray<T>) =>
				Array<U>
	>()
