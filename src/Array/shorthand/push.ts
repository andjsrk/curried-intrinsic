import { push } from '../push'

export const pushOne =
	<T>(element: T) =>
		push([element])
