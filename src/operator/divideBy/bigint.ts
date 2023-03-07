import { binary } from '../_base'

export const divideBy = binary<bigint>()(b => a => a / b)
