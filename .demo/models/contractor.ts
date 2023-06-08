interface ContractorJson {
  title: string
  external_id: string
  company_id: string
  id: string
  lsn: 0
}

export const contractor = {
  list() {
    return $fetch<ContractorJson[]>('contractor', { method: 'POST' })
  },
  create<T = ContractorJson>(body: T) {
    return $fetch<T>('contractor', { method: 'POST' })
  },
  byId(id: ContractorJson['id']) {
    return useFetch<ContractorJson[]>('contractor/' + id)
  },
}
