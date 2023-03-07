import { curried } from 'create-curried'

export const endsWith = curried(String.prototype.endsWith, 2)
	.takes(1)
	.takes(0)
	.takesThis()
	.generate<
		(endPosition: number | undefined) =>
			(searchString: string) =>
				(string: string) =>
					boolean
	>()
