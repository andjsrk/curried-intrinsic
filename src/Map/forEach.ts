import { curried } from 'create-curried'

export const forEach = curried(Map.prototype.forEach)
	.takes(0)
	.takesThis()
	.generate<
		<K, V>(callbackFn: (value: V, key: K, map: Map<K, V>) => void) =>
			(map: Map<K, V>) =>
				void
	>()
