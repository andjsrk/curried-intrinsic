import { binary } from '../_base'

export const remainder = binary<bigint>()(b => a => a % b)
