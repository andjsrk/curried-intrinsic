import { binary } from '../_base'

export const plus = binary<bigint>()(a => b => a + b)
