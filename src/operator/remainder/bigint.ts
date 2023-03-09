import { binary } from '../_binary'

export const remainder = binary<bigint>()(b => a => a % b)
