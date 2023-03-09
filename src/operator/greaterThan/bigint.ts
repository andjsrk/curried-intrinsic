import { binary } from '../_binary'

export const greaterThan = binary<bigint, boolean>()(than => x => x > than)
