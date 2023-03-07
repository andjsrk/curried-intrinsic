import { curried } from 'create-curried'

export const test = curried(RegExp.prototype.test)
	.takesThis()
	.takes(0)
	.generate<
		(regexp: RegExp) =>
			(string: string) =>
				boolean
	>()
