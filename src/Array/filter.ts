import { curried } from 'create-curried'
import type { ArrayFnArgs, ArrayFnArgsExceptValue } from './_types'

export const filter = curried(Array.prototype.filter)
	.takes(0)
	.takesThis()
	.generate<
		& (
			<T, S extends T>(callbackFn: (value: T, ...args: ArrayFnArgsExceptValue<T>) => value is S) =>
				(array: ReadonlyArray<T>) =>
					Array<S>
		)
		& (
			<T>(callbackFn: (...args: ArrayFnArgs<T>) => unknown) =>
				(array: ReadonlyArray<T>) =>
					Array<T>
		)
	>()
