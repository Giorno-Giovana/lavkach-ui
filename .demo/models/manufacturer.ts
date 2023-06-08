export interface ManufacturerJson {
  title: string
  company_id: string
  id: string
  lsn: 0
}

export const manufacturer = {
  list() {
    return useFetch<ManufacturerJson[]>('manufacturer')
  },
  create<T = ManufacturerJson>(body: T) {
    return $fetch<T>('manufacturer/create', { method: 'POST' })
  },
  byId(id: ManufacturerJson['id']) {
    return useFetch<ManufacturerJson[]>('manufacturer/' + id)
  },
}
