export interface CompanyJson {
  id: string
  title: string
  external_id: string
  lang: string
  country: string
  currency: string
}

export const company = {
  list() {
    return useFetch<CompanyJson[]>('company')
  },
  create<T = CompanyJson>(body: T) {
    return $fetch<T>('company/create', { method: 'POST' })
  },
  byId(id: CompanyJson['id']) {
    return useFetch<CompanyJson[]>('company/' + id)
  },
}
