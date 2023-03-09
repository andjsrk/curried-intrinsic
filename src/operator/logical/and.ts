import { binary } from '../_binary'

export const and = binary<boolean>()(a => b => a && b)
