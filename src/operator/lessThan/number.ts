import { binary } from '../_base'

export const lessThan = binary<number, boolean>()(than => x => x < than)
