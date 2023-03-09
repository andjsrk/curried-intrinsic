import { binary } from '../_binary'

export const or = binary<boolean>()(b => a => a || b)
