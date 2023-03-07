import { curried } from 'create-curried'

export const charAt = curried(String.prototype.charAt)
	.takes(0)
	.takesThis()
	.generate<
		(index: number) =>
			(string: string) =>
				string
	>()
