import { binary } from '../_base'

export const unsignedRightShift = binary<number>()(b => a => a >>> b)
