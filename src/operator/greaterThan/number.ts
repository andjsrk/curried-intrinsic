import { binary } from '../_base'

export const greaterThan = binary<number, boolean>()(than => x => x > than)
