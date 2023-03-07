import { curried } from 'create-curried'
import type { ReduceFnArgs } from './_types'

export const reduceRight = curried(Array.prototype.reduceRight, 2)
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

export const reduceRightWithoutInitial = curried(Array.prototype.reduceRight)
	.takes(0)
	.takesThis()
	.generate<
		<T>(callbackFn: (...args: ReduceFnArgs<T>) => T) =>
			(array: ReadonlyArray<T>) =>
				T
	>()
