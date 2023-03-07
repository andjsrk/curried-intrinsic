import { binary } from '../_base'

export const power = binary<number>()(b => a => a ** b)
