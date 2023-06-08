interface StoreJson {
  id: string
  title: string
  external_id: string
  address: string
  source: string
}

export const store = {
  list() {
    return $fetch<StoreJson[]>('store', { method: 'POST' })
  },
  create<T = StoreJson>(body: T) {
    return $fetch<T>('store', { method: 'POST' })
  },
  byId(id: StoreJson['id']) {
    return $fetch<StoreJson[]>('store/' + id, { method: 'GET' })
  },
}
