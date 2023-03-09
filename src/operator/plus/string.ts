import { binary } from '../_binary'

export const plus = binary<string>()(b => a => a + b)
