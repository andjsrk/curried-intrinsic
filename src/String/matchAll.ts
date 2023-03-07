import { curried } from 'create-curried'

export const matchAll = curried(String.prototype.matchAll)
	.takes(0)
	.takesThis()
	.generate<
		(regexp: RegExp) =>
			(string: string) =>
				IterableIterator<RegExpMatchArray>
	>()
