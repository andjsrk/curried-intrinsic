import { curried } from 'create-curried'
import type { ArrayFnArgs, ArrayFnArgsExceptValue } from './_types'

export const every = curried(Array.prototype.every)
	.takes(0)
	.takesThis()
	.generate<
		& (
			<T, S extends T>(callbackFn: (value: T, ...args: ArrayFnArgsExceptValue<T>) => value is S) =>
				(array: ReadonlyArray<T>) =>
					array is ReadonlyArray<S>
		)
		& (
			<T>(callbackFn: (...args: ArrayFnArgs<T>) => unknown) =>
				(array: ReadonlyArray<T>) =>
					boolean
		)
	>()
