import { binary } from '../_binary'

export const lessThan = binary<bigint, boolean>()(than => x => x < than)
