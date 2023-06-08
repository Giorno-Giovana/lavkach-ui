export interface StoreJson {
  id: string
  title: string
  external_id: string
  address: string
  source: string
}

export const store = {
  list() {
    return useFetch<StoreJson[]>('store')
  },
  create<T = StoreJson>(body: T) {
    return $fetch<T>('store/create', { method: 'POST' })
  },
  byId(id: StoreJson['id']) {
    return $fetch<StoreJson[]>('store/' + id)
  },
}
