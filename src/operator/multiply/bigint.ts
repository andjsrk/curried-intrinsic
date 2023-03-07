import { binary } from '../_base'

export const multiply = binary<bigint>()(a => b => a * b)
