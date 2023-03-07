import { curried } from 'create-curried'

export const normalize = curried(String.prototype.normalize, 1)
	.takes(0)
	.takesThis()
	.generate<
		(form: `NF${'K' | ''}${'C' | 'D'}` | undefined) =>
			(string: string) =>
				string
	>()
