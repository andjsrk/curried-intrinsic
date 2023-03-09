import { binary } from '../_binary'

export const unsignedRightShift = binary<number>()(b => a => a >>> b)
