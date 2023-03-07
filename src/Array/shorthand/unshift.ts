import { unshift } from '../unshift'

export const unshiftOne =
	<T>(element: T) =>
		unshift([element])
