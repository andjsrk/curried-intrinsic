import { binary } from '../_base'

export const remainder = binary<number>()(b => a => a % b)
