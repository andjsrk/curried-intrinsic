import { binary } from '../../_base'

export const rightShift = binary<number>()(b => a => a >> b)
