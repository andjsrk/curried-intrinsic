import { binary } from '../_binary'

export const greaterThan = binary<number, boolean>()(than => x => x > than)
