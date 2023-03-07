import { binary } from '../_base'

export const and = binary<boolean>()(a => b => a && b)
