import { binary } from '../_binary'

export const power = binary<number>()(b => a => a ** b)
