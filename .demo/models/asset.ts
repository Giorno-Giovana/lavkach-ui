import { AssetLogJson } from './assetLog'
import { AssetTypeJson } from './assetType'
import { ManufacturerJson } from './manufacturer'
import { ModelJson } from './model'
import { StoreJson } from './store'
import { UserJson } from './user'

export interface AssetJson {
  title: string
  company_id: string
  asset_type_id: string
  manufacturer_id: string
  store_id: string
  model_id: string
  status: 'draft'
  serial: string
  at_user_id: string
  user_created_id: string
  barcode: string
  id: string
  lsn: number
  asset_type: AssetTypeJson
  manufacturer: ManufacturerJson
  store: StoreJson
  model: ModelJson
  user_created: UserJson
  at_user: UserJson
  orders: [
    {
      company_id: string
      description: string
      supplier_id: string
      status: 'draft'
      asset_id: string
      store_id: string
      user_created_id: string
      supplier_user_id: string
      id: string
      lsn: number
      number: 0
      store: {
        title: string
        external_id: string
        address: string
        source: 'internal'
        lsn: number
        id: string
      }
      user_created: {
        id: string
        email: string
        nickname: string
        type: 'common'
        store: {
          title: string
          external_id: string
          address: string
          source: 'internal'
        }
      }
      supplier_user: {
        id: string
        email: string
        nickname: string
        type: 'common'
        store: {
          title: string
          external_id: string
          address: string
          source: 'internal'
        }
      }
      order_lines: [
        {
          title: string
          description: string
          order_id: string
          quantity: 0
          id: string
          lsn: number
        },
      ]
    },
  ]
  asset_logs: AssetLogJson
}

export const asset = {
  list() {
    return useFetch<AssetJson[]>('asset')
  },
  create<T = AssetJson>(body: T) {
    return $fetch<T>('asset/create', { method: 'POST' })
  },
  byId(id: AssetJson['id']) {
    return useFetch<AssetJson>('asset/' + id)
  },
}
