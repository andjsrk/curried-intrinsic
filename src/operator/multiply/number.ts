import { binary } from '../_base'

export const multiply = binary<number>()(a => b => a * b)
