export interface AssetTypeJson {
  title: string
  company_id: string
  type: 'storable'
  source: 'internal'
  serial_required: boolean
  id: string
  lsn: 0
}

export const assetType = {
  list() {
    return useFetch<AssetTypeJson[]>('assets_type')
  },
  create<T = AssetTypeJson>(body: T) {
    return $fetch<T>('assets_type/create', { method: 'POST' })
  },
  byId(id: AssetTypeJson['id']) {
    return useFetch<AssetTypeJson[]>('assets_type/' + id)
  },
}
