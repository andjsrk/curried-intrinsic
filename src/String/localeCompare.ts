import { curried } from 'create-curried'

export const localeCompare = curried(String.prototype.localeCompare, 3)
	.takes(2)
	.takes(1)
	.takes(0)
	.generate<
		(options: Intl.CollatorOptions | undefined) =>
			(locales: string | Array<string> | undefined) =>
				(that: string) =>
					(string: string) =>
						number
	>()
