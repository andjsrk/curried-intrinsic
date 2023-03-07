import { curried } from 'create-curried'

export const includes = curried(String.prototype.includes, 2)
	.takes(1)
	.takes(0)
	.takesThis()
	.generate<
		(fromIndex: number | undefined) =>
			(searchString: string) =>
				(string: string) =>
					boolean
	>()
