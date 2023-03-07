export type ArrayFnArgs<T> = [element: T, index: number, array: ReadonlyArray<T>]
export type ArrayFnArgsExceptValue<T> =
	ArrayFnArgs<T> extends [infer _, ...infer Rest]
		? Rest
		: never
export type ReduceFnArgs<T, Acc = T> = [accumulator: Acc, currentValue: T, currentIndex: number, array: ReadonlyArray<T>]
