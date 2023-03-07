import { curried } from 'create-curried'

export const has = curried(Map.prototype.has)
	.takes(0)
	.generate<
		<K>(key: K) =>
			(map: Map<K, unknown>) =>
				boolean
	>()
