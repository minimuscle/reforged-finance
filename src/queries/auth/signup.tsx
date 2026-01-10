import { mutationOptions } from '@tanstack/react-query'
import { API } from 'api/index'

/**********************************************************************************************************
 *   MUTATION START
 **********************************************************************************************************/
export const signupUser = mutationOptions({
  mutationKey: ['auth', 'signup'],
  mutationFn: API.auth.signup,
})
