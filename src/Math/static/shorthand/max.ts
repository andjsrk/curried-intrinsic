import { max } from '../max'

export const max2 =
	(a: number) =>
		(b: number) =>
			max([a, b])

export const atLeastZero = max2(0)
