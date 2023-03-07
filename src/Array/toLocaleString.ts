import { curried } from 'create-curried'

type ToLocaleStringFn =
	(locales?: Intl.LocalesArgument, options?: object) => string

export const toLocaleString = curried(Array.prototype.toLocaleString as ToLocaleStringFn)
	.takes(1)
	.takes(0)
	.takesThis()
	.generate<
		(options: object | undefined) =>
			(locales: Intl.LocalesArgument | undefined) =>
				(array: ReadonlyArray<unknown>) =>
					string
	>()
