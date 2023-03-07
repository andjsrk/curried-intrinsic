import { binary } from '../../_base'

export const and = binary<number>()(a => b => a & b)
