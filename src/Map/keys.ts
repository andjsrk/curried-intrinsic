import { curried } from 'create-curried'

export const keys = curried(Map.prototype.keys)
	.takesThis()
	.generate<
		<K>(map: Map<K, unknown>) =>
			IterableIterator<K>
	>()
