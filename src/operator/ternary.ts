export const ternary =
	<E>(else_: E) =>
		<T>(then: T) =>
			(condition: boolean) =>
				condition ? then : else_
