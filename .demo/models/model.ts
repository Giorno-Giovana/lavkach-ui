import { ManufacturerJson } from './manufacturer'

export interface ModelJson {
  title: string
  manufacturer_id: string
  id: string
  lsn: 0
  manufacturer: ManufacturerJson
}

export const model = {
  list() {
    return useFetch<ModelJson[]>('model')
  },
  create<T = ModelJson>(body: T) {
    return $fetch<T>('model/create', { method: 'POST' })
  },
  byId(id: ModelJson['id']) {
    return useFetch<ModelJson[]>('model/' + id)
  },
}
