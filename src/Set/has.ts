import { curried } from 'create-curried'

export const has = curried(Set.prototype.has)
	.takes(0)
	.takesThis()
	.generate<
		<T>(value: T) =>
			(set: Set<T>) =>
				boolean
	>()
