import { curried } from 'create-curried'

export const slice = curried(String.prototype.slice)
	.takes(1)
	.takes(0)
	.takesThis()
	.generate<
		(end: number | undefined) =>
			(start: number | undefined) =>
				(string: string) =>
					string
	>()
