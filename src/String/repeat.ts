import { curried } from 'create-curried'

export const repeat = curried(String.prototype.repeat)
	.takes(0)
	.takesThis()
	.generate<
		(count: number) =>
			(string: string) =>
				string
	>()
