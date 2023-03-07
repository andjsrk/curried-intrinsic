import { flat as _flat } from '../flat'

type FlatArrayInfinite<Arr> =
	Arr extends ReadonlyArray<infer InnerArr>
		? FlatArrayInfinite<InnerArr>
		: Arr

export const flat = _flat(Infinity) as (
	<A extends ReadonlyArray<any>>(array: A) =>
		Array<FlatArrayInfinite<A>>
)
