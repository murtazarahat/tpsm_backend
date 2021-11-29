import { CountryModel } from '../models/country.model'
import { ICountriesDocument } from '../types/documents/country.document'
import { ICountryGetResponse } from '../types/responses/country.response'

export class CountryRepository {
  constructor() {}

  async getCountryList() {
    const response = await CountryModel.find({}, { countryName: 1, id: 1 })
    return response
  }
}
