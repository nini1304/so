import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ResponselocationDto} from "../../dto/responselocation.dto";
import {CurrencyService} from "../../service/currency.service";
import {ResponseCurrencyDto} from "../../dto/response.currency.dto";

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {
  title = 'Location';
  locationForm: FormGroup;
  responseLocationDto: ResponselocationDto;
  constructor(private formBuilder: FormBuilder, private currencyService: CurrencyService) {
    this.locationForm = this.formBuilder.group({
      ip: ''

    })
  }


  submit() {
    console.log(this.locationForm.value);
    this.currencyService.locationCurrency(this.locationForm.value.ip).subscribe({
      next: (response: ResponselocationDto) => {
        console.log('invocacion exitosa');
        console.log(response);
        this.responseLocationDto = response;

      }
    })
    console.log('test');
  }

}
