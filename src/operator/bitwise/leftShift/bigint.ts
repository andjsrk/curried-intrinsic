import { binary } from '../../_binary'

export const leftShift = binary<bigint>()(b => a => a << b)
