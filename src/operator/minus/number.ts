import { binary } from '../_base'

export const minus = binary<number>()(b => a => a - b)
