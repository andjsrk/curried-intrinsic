import { binary } from '../../_binary'

export const rightShift = binary<number>()(b => a => a >> b)
