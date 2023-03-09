import { binary } from '../_binary'

export const minus = binary<bigint>()(b => a => a - b)
