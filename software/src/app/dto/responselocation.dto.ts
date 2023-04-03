import {LocationDetailsDto} from "./location.details.dto";
import {CurrencyDto} from "./currency.dto";

export interface ResponselocationDto {
  city: String,
  continent_code: String,
  continent_name: String,
  country_code: String,
  country_name: String,
  currencies: CurrencyDto[],
  ip: String,
  is_eu: Boolean,
  latitude: number,
  location: LocationDetailsDto,
  longitude: number,
  region_name: String,
  timezones: String[],
  type: String

}
