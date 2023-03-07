import { curried } from 'create-curried'

export const toLocaleUpperCase = curried(String.prototype.toLocaleUpperCase, 1)
	.takes(0)
	.takesThis()
	.generate<
		(locales: string | Array<string> | undefined) =>
			(string: string) =>
				string
	>()
