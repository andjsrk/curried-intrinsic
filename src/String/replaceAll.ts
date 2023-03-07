import { curried } from 'create-curried'

export const replaceAll = curried(String.prototype.replaceAll)
	.takes(0)
	.takes(1)
	.takesThis()
	.generate<
		(searchValue: string | RegExp) =>
			& (
				(replaceValue: string) =>
					string
			)
			& (
				(replacer: (substring: string, ...args: Array<any>) => string) =>
					string
			)
	>()
