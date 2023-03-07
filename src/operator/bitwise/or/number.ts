import { binary } from '../../_base'

export const or = binary<number>()(a => b => a | b)
