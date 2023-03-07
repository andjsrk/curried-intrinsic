import { binary } from '../../_base'

export const and = binary<bigint>()(a => b => a & b)
