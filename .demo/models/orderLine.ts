export interface OrderLineJson {
  title: string
  description: string
  order_id: string
  quantity: number
  id: string
  lsn: number
  store: {
    id: string
    title: string
    external_id: string
    address: string
    source: string
  }
  user_created: {
    id: number
    email: string
    nickname: string
  }
  supplier_user: {
    id: number
    email: string
    nickname: string
  }
}
