import { AssetJson } from './asset'

export interface AssetLogJson {
  id: number
  asset_id: AssetJson['id']
  date: string
  action: string
  from: string
  to: string
}

export const assetType = {
  list() {
    return useFetch<AssetLogJson[]>('assets_type')
  },
  create<T = AssetLogJson>(body: T) {
    return $fetch<T>('assets_type/create', { method: 'POST' })
  },
  byId(id: AssetLogJson['id']) {
    return useFetch<AssetLogJson[]>('assets_type/' + id)
  },
}
