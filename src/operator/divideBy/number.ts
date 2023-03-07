import { binary } from '../_base'

export const divideBy = binary<number>()(b => a => a / b)
