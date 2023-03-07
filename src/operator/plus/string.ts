import { binary } from '../_base'

export const plus = binary<string>()(b => a => a + b)
