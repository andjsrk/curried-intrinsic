import { curried } from 'create-curried'

export const lastIndexOf = curried(String.prototype.lastIndexOf, 2)
	.takes(1)
	.takes(0)
	.takesThis()
	.generate<
		(fromIndex: number | undefined) =>
			(searchString: string) =>
				(string: string) =>
					number
	>()
