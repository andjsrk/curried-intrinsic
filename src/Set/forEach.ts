import { curried } from 'create-curried'

export const forEach = curried(Set.prototype.forEach)
	.takes(0)
	.takesThis()
	.generate<
		<T>(callback: (value: T, key: T, set: Set<T>) => void) =>
			(set: Set<T>) =>
				void
	>()
