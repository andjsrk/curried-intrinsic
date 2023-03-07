import { binary } from '../_base'

export const lessThan = binary<bigint, boolean>()(than => x => x < than)
