import { binary } from '../../_binary'

export const and = binary<bigint>()(a => b => a & b)
