import { binary } from '../../_binary'

export const and = binary<number>()(a => b => a & b)
