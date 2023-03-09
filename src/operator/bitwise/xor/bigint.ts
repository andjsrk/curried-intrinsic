import { binary } from '../../_binary'

export const xor = binary<bigint>()(a => b => a ^ b)
