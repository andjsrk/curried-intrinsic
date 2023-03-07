import { binary } from '../../_base'

export const or = binary<bigint>()(a => b => a | b)
