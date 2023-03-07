import { ternary } from '../ternary'

export const lazyTernary =
	<E>(else_: () => E) =>
		<T>(then: () => T) =>
			(condition: boolean) =>
				ternary(else_)(then)(condition)()
