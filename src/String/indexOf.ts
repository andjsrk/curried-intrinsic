import { curried } from 'create-curried'

export const indexOf = curried(String.prototype.indexOf, 2)
	.takes(1)
	.takes(0)
	.takesThis()
	.generate<
		(fromIndex: number | undefined) =>
			(searchString: string) =>
				(string: string) =>
					number
	>()
