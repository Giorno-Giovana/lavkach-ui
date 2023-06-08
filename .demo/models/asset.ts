import { AssetTypeJson } from "./assetType"
import { ManufacturerJson } from "./manufacturer"
import { ModelJson } from "./model"
import { StoreJson } from "./store"

export interface AssetJson {
  title: string
  company_id: string
  asset_type_id: string
  manufacturer_id: string
  store_id: string
  model_id: string
  status: string
  serial: string
  at: string
  user_id: string
  id: string
  lsn: 0
  asset_type: AssetTypeJson
  manufacturer: ManufacturerJson
  store: StoreJson
  model: ModelJson
  user: {
    id: 0
    email: string
    nickname: string
  }
}

export const asset = {
  list() {
    return useFetch<AssetJson[]>('asset')
  },
  create<T = AssetJson>(body: T) {
    return $fetch<T>('asset/create', { method: 'POST' })
  },
  byId(id: AssetJson['id']) {
    return useFetch<AssetJson[]>('asset/' + id)
  },
}
