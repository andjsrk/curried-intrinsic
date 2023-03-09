import { binary } from '../../_binary'

export const leftShift = binary<number>()(b => a => a << b)
