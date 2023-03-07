type InResult<O, K extends PropertyKey> =
	[
		O extends infer E
			? K extends keyof E
				? E & Record<K, Required<E>[K]>
				: never
			: never
	] extends [infer R]
		? [R] extends [never]
			? Record<K, unknown>
			: R extends O
				? R
				: never
		: never

export const in_ =
	<K extends PropertyKey>(key: K) =>
		<O extends object>(object: O): object is InResult<O, K> =>
			key in object
