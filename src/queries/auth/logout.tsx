import { mutationOptions } from '@tanstack/react-query'
import { API } from 'api/index'

/**********************************************************************************************************
 *   MUTATION START
 **********************************************************************************************************/
export const logoutUser = mutationOptions({
  mutationKey: ['auth', 'logout'],
  mutationFn: API.auth.logout,
})
