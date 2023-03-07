import { binary } from '../../_base'

export const leftShift = binary<number>()(b => a => a << b)
