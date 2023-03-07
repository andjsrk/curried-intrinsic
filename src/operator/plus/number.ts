import { binary } from '../_base'

export const plus = binary<number>()(a => b => a + b)
