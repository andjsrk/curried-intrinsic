import { curried } from 'create-curried'
import type { ArrayFnArgs, ArrayFnArgsExceptValue } from './_types'

export const find = curried(Array.prototype.find)
	.takes(0)
	.takesThis()
	.generate<
		& (
			<T, S extends T>(callbackFn: (value: T, ...args: ArrayFnArgsExceptValue<T>) => value is S) =>
				(array: ReadonlyArray<T>) =>
					S | undefined
		)
		& (
			<T>(callbackFn: (...args: ArrayFnArgs<T>) => unknown) =>
				(array: ReadonlyArray<T>) =>
					T | undefined
		)
	>()
