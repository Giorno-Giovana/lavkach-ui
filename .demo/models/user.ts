import { StoreJson } from './store'

export interface UserJson {
  id: string
  email: string
  nickname: string
  type: string
  store: Omit<StoreJson, 'id'>
}

export const user = {
  list() {
    return useFetch<UserJson[]>('users')
  },
  login(request: { email: string; password: string }) {
    return $fetch<{ token: string }>('users/login', {
      method: 'POST',
      body: request,
    })
  },
}
