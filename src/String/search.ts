import { curried } from 'create-curried'

export const search = curried(String.prototype.search)
	.takes(0)
	.takesThis()
	.generate<
		(regexp: string | RegExp) =>
			(string: string) =>
				number
	>()
