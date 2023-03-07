import { binary } from '../../_base'

export const rightShift = binary<bigint>()(b => a => a >> b)
