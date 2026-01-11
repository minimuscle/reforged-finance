import { mutationOptions } from '@tanstack/react-query'
import { API } from 'api/index'

/**********************************************************************************************************
 *   MUTATION START
 **********************************************************************************************************/
export const loginUser = mutationOptions({
  mutationKey: ['auth', 'login'],
  mutationFn: API.auth.login,
})
