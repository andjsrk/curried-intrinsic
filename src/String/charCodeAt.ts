import { curried } from 'create-curried'

export const charCodeAt = curried(String.prototype.charCodeAt)
	.takes(0)
	.takesThis()
	.generate<
		(index: number) =>
			(string: string) =>
				number
	>()
