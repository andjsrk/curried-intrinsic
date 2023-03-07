import { curried } from 'create-curried'

export const at = curried(String.prototype.at)
	.takes(0)
	.takesThis()
	.generate<
		(index: number) =>
			(string: string) =>
				string | undefined
	>()
