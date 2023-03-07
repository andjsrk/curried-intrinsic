import { curried } from 'create-curried'
import type { ReduceFnArgs } from './_types'

export const reduce = curried(Array.prototype.reduce, 2)
	.takes(0)
	.takes(1)
	.takesThis()
	.generate<
		& (
			<T>(callbackFn: (...args: ReduceFnArgs<T>) => T) =>
				(initialValue: T) =>
					(array: ReadonlyArray<T>) =>
						T
		)
		& (
			<T, U>(callbackFn: (...args: ReduceFnArgs<T, U>) => U) =>
				(initialValue: U) =>
					(array: ReadonlyArray<T>) =>
						U
		)
	>()

export const reduceWithoutInitial = curried(Array.prototype.reduce)
	.takes(0)
	.takesThis()
	.generate<
		<T>(callbackFn: (...args: ReduceFnArgs<T>) => T) =>
			(array: ReadonlyArray<T>) =>
				T
	>()
