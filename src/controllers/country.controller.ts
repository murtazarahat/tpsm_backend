import { Controller, Get, Route, Tags } from '@tsoa/runtime'
import { CountryRepository } from '../repositories/country.repository'
import { ICountryGetResponse } from '../types/responses/country.response'

@Route('countries')
@Tags('Country API')
export class CountryController extends Controller {
  constructor() {
    super()
  }

  @Get('getList')
  async getCountryList() {
    const response = await new CountryRepository().getCountryList()
    console.log(response)
    let data: {[k:string]: any} = {}
    data.countries = []
    for(let i=0;i<response.length;i++){
        data.countries.push({ id: response[i].id, countryName: response[i].countryName})
    }
    return data
  }
}
