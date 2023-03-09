import { binary } from '../../_binary'

export const or = binary<bigint>()(a => b => a | b)
