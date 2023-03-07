import { binary } from '../_base'

export const or = binary<boolean>()(b => a => a || b)
