import { curried } from 'create-curried'

export const codePointAt = curried(String.prototype.codePointAt)
	.takes(0)
	.takesThis()
	.generate<
		(index: number) =>
			(string: string) =>
				number | undefined
	>()
