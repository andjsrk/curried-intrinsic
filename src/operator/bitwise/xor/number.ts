import { binary } from '../../_base'

export const xor = binary<number>()(a => b => a ^ b)
