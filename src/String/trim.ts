import { curried } from 'create-curried'

export const trim = curried(String.prototype.trim)
	.takesThis()
	.generate<
		(string: string) => string
	>()
