import { concat } from '../concat'

export const concat2 =
	<T>(anotherArray: ReadonlyArray<T>) =>
		concat([anotherArray])
