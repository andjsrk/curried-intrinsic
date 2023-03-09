import { binary } from '../_binary'

export const minus = binary<number>()(b => a => a - b)
