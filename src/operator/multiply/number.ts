import { binary } from '../_binary'

export const multiply = binary<number>()(a => b => a * b)
