import { curried } from 'create-curried'

export const get = curried(Map.prototype.get)
	.takes(0)
	.takesThis()
	.generate<
		<K>(key: K) =>
			<V>(map: Map<K, V>) =>
				V | undefined
	>()
