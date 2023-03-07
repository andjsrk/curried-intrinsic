import { curried } from 'create-curried'

export const delete_ = curried(Map.prototype.delete)
	.takes(0)
	.takesThis()
	.generate<
		<K>(key: K) =>
			(map: Map<K, unknown>) =>
				boolean
	>()
