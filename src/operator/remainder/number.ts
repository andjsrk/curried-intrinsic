import { binary } from '../_binary'

export const remainder = binary<number>()(b => a => a % b)
