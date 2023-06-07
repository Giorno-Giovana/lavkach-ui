interface CompanyJson {
  "id": string,
  "title": string,
  "external_id": string,
  "lang": string,
  "country": string,
  "currency": string,
}

export class Company implements CompanyJson {
  constructor(json: CompanyJson) {
    this.country = json.country
    this.currency = json.currency
    this.external_id = json.external_id
    this.id = json.id
    this.lang = json.lang
    this.title = json.title
  }

  country: string;
  currency: string;
  external_id: string;
  id: string;
  lang: string;
  title: string;
}
