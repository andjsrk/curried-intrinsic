import { curried } from 'create-curried'

export const substring = curried(String.prototype.substring)
	.takes(1)
	.takes(0)
	.takesThis()
	.generate<
		(end: number | undefined) =>
			(start: number) =>
				(string: string) =>
					string
	>()
