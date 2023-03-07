import { curried } from 'create-curried'

export const startsWith = curried(String.prototype.startsWith, 2)
	.takes(1)
	.takes(0)
	.takesThis()
	.generate<
		(startPosition: number | undefined) =>
			(searchString: string) =>
				(string: string) =>
					string
	>()
