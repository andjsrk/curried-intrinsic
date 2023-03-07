import { curried } from 'create-curried'

export const add = curried(Set.prototype.add)
	.takes(0)
	.takesThis()
	.generate<
		<T>(value: T) =>
			(set: Set<T>) =>
				Set<T>
	>()
