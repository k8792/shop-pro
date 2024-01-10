import { http } from '@/utils/http'
import type { loginType } from './types/loginType'

export const loginApi = (login: loginType) => {
  return http<string>({
    url: '',
    method: 'POST',
    data: login,
  })
}
