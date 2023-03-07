import { curried } from 'create-curried'

export const exec = curried(RegExp.prototype.exec)
	.takesThis()
	.takes(0)
	.generate<
		(regexp: RegExp) =>
			(string: string) =>
				boolean
	>()
