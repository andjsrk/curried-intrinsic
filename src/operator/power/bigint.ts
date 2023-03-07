import { binary } from '../_base'

export const power = binary<bigint>()(b => a => a ** b)
