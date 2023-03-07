import { curried } from 'create-curried'

export const split = curried(String.prototype.split)
	.takes(1)
	.takes(0)
	.generate<
		(limit: number | undefined) =>
			(separator: string | RegExp) =>
				(string: string) =>
					Array<string>
	>()
