import { binary } from '../../_binary'

export const rightShift = binary<bigint>()(b => a => a >> b)
