import { OrderLineJson } from './orderLine'
import { StoreJson } from './store'
import { UserJson } from './user'

export interface OrderJson {
  description: string
  supplier_id: string
  status: string
  asset_id: string
  store_id: string
  user_created_id: string
  supplier_user_id: string
  id: string
  lsn: number
  number: number
  store: StoreJson
  user_created: UserJson
  supplier_user: UserJson
  order_lines: OrderLineJson[]
}

export const order = {
  list() {
    return useFetch<OrderJson[]>('order')
  },
  create(body: {
    description: string
    supplier_id: string
    status: 'draft'
    asset_id: string
    store_id: string
    user_created_id: string
    supplier_user_id: string
  }) {
    return $fetch<OrderJson>('order/create', { method: 'POST' })
  },
  byId(id: OrderJson['id']) {
    return $fetch<OrderJson[]>('order/' + id)
  },
}
