import { curried } from 'create-curried'

export const flat = curried(Array.prototype.flat)
	.takesThis()
	.generate<
		<D extends number = 1>(depth: D | undefined) =>
			<A extends ReadonlyArray<any>>(array: A) =>
				Array<FlatArray<A, D>>
	>()
