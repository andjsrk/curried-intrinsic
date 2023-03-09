import { binary } from '../_binary'

export const power = binary<bigint>()(b => a => a ** b)
