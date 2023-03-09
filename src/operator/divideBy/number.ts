import { binary } from '../_binary'

export const divideBy = binary<number>()(b => a => a / b)
