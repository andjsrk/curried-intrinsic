import { curried } from 'create-curried'

export const toLocaleLowerCase = curried(String.prototype.toLocaleLowerCase, 1)
	.takes(0)
	.takesThis()
	.generate<
		(locales: string | Array<string> | undefined) =>
			(string: string) =>
				string
	>()
