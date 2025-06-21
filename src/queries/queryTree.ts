import { getCash } from "src/queries/queries/getCash"
import { getProfile } from "src/queries/queries/getProfile"
import { getUser } from "src/queries/queries/getUser"

export const query = {
  user: Object.assign(getUser, {
    cash: getCash,
    profile: getProfile,
  }),
}
