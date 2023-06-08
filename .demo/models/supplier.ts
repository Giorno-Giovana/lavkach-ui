import { ContractorJson } from './contractor'
export interface SupplierJson {
  title: string
  external_id: string
  company_id: string
  contractor_id: string
  id: string
  lsn: number
  contractor: ContractorJson
}

export const supplier = {
  list() {
    return useFetch<SupplierJson[]>('supplier')
  },
  create<T = SupplierJson>(body: T) {
    return $fetch<T>('supplier/create', { method: 'POST' })
  },
  byId(id: SupplierJson['id']) {
    return useFetch<SupplierJson[]>('supplier/' + id)
  },
}
