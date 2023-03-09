import { binary } from '../_binary'

export const multiply = binary<bigint>()(a => b => a * b)
