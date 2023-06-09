import { FetchError } from 'ofetch'

export function useSearch<T>(
  data: T,
  error: FetchError<any> | null,
): { search: Ref<string>; filteredData: ComputedRef<NonNullable<T>> } {
  const search = ref('')

  const filteredData = computed(() => {
    if (error || !data) return []
    if (search.value === '') return data

    const memoSearch = search.value.toLowerCase()

    const result = []

    // @ts-expect-error
    for (const item of data) {
      for (const value of Object.values(item)) {
        // @ts-expect-error
        if (value.toLowerCase().includes(memoSearch)) {
          result.push(item)
          break
        }
      }
    }

    return result
  })

  // @ts-expect-error
  return { search, filteredData }
}
