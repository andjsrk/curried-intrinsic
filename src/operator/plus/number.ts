import { binary } from '../_binary'

export const plus = binary<number>()(a => b => a + b)
