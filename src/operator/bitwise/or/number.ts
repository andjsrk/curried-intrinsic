import { binary } from '../../_binary'

export const or = binary<number>()(a => b => a | b)
