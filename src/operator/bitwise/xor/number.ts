import { binary } from '../../_binary'

export const xor = binary<number>()(a => b => a ^ b)
