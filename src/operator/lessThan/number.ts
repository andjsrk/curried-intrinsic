import { binary } from '../_binary'

export const lessThan = binary<number, boolean>()(than => x => x < than)
