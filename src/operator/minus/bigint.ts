import { binary } from '../_base'

export const minus = binary<bigint>()(b => a => a - b)
