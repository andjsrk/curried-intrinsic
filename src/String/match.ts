import { curried } from 'create-curried'

export const match = curried(String.prototype.match)
	.takes(0)
	.takesThis()
	.generate<
		(regexp: string | RegExp) =>
			(string: string) =>
				RegExpMatchArray | null
	>()
