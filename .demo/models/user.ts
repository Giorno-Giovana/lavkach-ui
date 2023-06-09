export interface UserJson {
  id: number
  email: string
  nickname: string
}

export const user = {
  list() {
    return useFetch<UserJson[]>('users')
  },
  login(request: { email: string, password: string }) {
    return $fetch<{ token: string }>('users/login', { method: 'POST', body: request })
  }
}