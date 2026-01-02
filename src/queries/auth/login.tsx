import { mutationOptions } from '@tanstack/react-query'
import { API } from 'api/index'

/**********************************************************************************************************
 *   MUTATION START
 **********************************************************************************************************/
export const loginUser = mutationOptions({
  mutationKey: ['auth', 'login'],
  mutationFn: async ({ email, password }: API.auth.login.Params) => {
    return await API.auth.login({ email, password })
  },
})
