interface CompanyJson {
  id: string
  title: string
  external_id: string
  lang: string
  country: string
  currency: string
}

export const company = {
  list() {
    return $fetch<CompanyJson[]>('company', { method: 'POST' })
  },
  create<T = CompanyJson>(body: T) {
    return $fetch<T>('company/create', { method: 'POST' })
  },
  byId(id: CompanyJson['id']) {
    return useFetch<CompanyJson[]>('company/' + id, { method: 'GET' })
  },
}
