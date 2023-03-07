import { curried } from 'create-curried'

export const toLocaleString = curried(Number.prototype.toLocaleString)
	.takes(1)
	.takes(0)
	.takesThis()
	.generate<
		(options: Intl.NumberFormatOptions | undefined) =>
			(locales: Intl.LocalesArgument | undefined) =>
				(number: number) =>
					string
	>()
