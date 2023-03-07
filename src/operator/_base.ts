export const binary =
	<T, R = T>() =>
		// `F` for preserve parameter names
		<F extends (a: T) => (b: T) => R>(f: F) =>
			f
