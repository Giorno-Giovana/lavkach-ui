import { Company } from "./company";

export class Companies {
    static async fetch() {
        return useFetch<Company[]>('/company', {
          transform: (companies) =>
            companies.map((company) => new Company(company)),
        });
    }
}
