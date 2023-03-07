export const nullishCoalesce =
	<U>(b: U) =>
		<T>(a: T) =>
			a ?? b
