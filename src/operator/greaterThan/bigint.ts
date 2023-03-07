import { binary } from '../_base'

export const greaterThan = binary<bigint, boolean>()(than => x => x > than)
