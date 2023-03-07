import { curried } from 'create-curried'

export const padEnd = curried(String.prototype.padEnd, 2)
	.takes(1)
	.takes(0)
	.takesThis()
	.generate<
		(fillString: string | undefined) =>
			(maxLength: number) =>
				(string: string) =>
					string
	>()
