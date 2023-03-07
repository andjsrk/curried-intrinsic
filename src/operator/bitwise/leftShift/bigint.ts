import { binary } from '../../_base'

export const leftShift = binary<bigint>()(b => a => a << b)
