import { curried } from 'create-curried'

export const set = curried(Map.prototype.set)
	.takes(0)
	.takes(1)
	.takesThis()
	.generate<
		<K>(key: K) =>
			<V>(value: V) =>
				(map: Map<K, V>) =>
					Map<K, V>
	>()
