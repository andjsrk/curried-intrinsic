import { binary } from '../../_base'

export const xor = binary<bigint>()(a => b => a ^ b)
