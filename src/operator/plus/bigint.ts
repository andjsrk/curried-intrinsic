import { binary } from '../_binary'

export const plus = binary<bigint>()(a => b => a + b)
