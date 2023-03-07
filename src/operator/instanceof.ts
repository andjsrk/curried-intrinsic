export const instanceof_ =
	<I extends object>(constructor: new (...args: any) => I) =>
		(object: object): object is I =>
			object instanceof constructor
