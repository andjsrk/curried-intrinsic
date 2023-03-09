import { binary } from '../_binary'

export const divideBy = binary<bigint>()(b => a => a / b)
