import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {CurrencyService} from "./service/currency.service";
import {ResponseCurrencyDto} from "./dto/response.currency.dto";
import {RecordDto} from "./dto/record.dto";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ingenieria de Software';
  currencyForm: FormGroup;
  responseCurrencyDto: ResponseCurrencyDto;



  constructor(private formBuilder: FormBuilder, private currencyService: CurrencyService) {
    this.currencyForm = this.formBuilder.group({
      from: '',
      to: '',
      amount: ''

    })
  }

  submit() {
    console.log(this.currencyForm.value);
    this.currencyService.convertCurrency(this.currencyForm.value.from,
      this.currencyForm.value.to,
      this.currencyForm.value.amount).subscribe({
      next: (response: ResponseCurrencyDto) => {
        console.log('invocacion exitosa');
        console.log(response);
        this.responseCurrencyDto = response;
        console.log('resultado');
        console.log(this.responseCurrencyDto.result);
      }
    })
    console.log('test');
  }
}
