interface ContractorJson {
  title: string
  external_id: string
  company_id: string
  id: string
  lsn: number
}

export const contractor = {
  list() {
    return useFetch<ContractorJson[]>('contractor')
  },
  create<T = ContractorJson>(body: T) {
    return $fetch<T>('contractor', { method: 'POST' })
  },
  byId(id: ContractorJson['id']) {
    return useFetch<ContractorJson[]>('contractor/' + id)
  },
}
