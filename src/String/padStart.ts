import { curried } from 'create-curried'

export const padStart = curried(String.prototype.padStart, 2)
	.takes(1)
	.takes(0)
	.takesThis()
	.generate<
		(fillString: string | undefined) =>
			(maxLength: number) =>
				(string: string) =>
					string
	>()
