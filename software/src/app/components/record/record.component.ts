import {Component, ViewChild} from '@angular/core';
import {RecordDto} from "../../dto/record.dto";
import {CurrencyService} from "../../service/currency.service";



@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent {
  recordDto:RecordDto[]
  pages:number=0
  total:number=0
  constructor(private service:CurrencyService) {
  }

  ngOnInit(){
    this.service.recordCurrency(this.pages).subscribe({
      next: data => {
        console.log(data);
        this.recordDto=data['content'];
        this.total = data['totalPages'];
        console.log(data['totalPages'])
      }
    })
  }

  increment(){
    if(this.pages<this.total){
      this.pages++;
      this.service.recordCurrency(this.pages).subscribe({
        next:data=>{
          this.recordDto=data['content'];
          this.total=data['totalPages'];
        }
      })
    }
  }
  decrement(){
    if(this.pages>0){
      this.pages--;
      this.service.recordCurrency(this.pages).subscribe({
        next:data=>{
          this.recordDto=data['content'];
          this.total=data['totalPages'];
        }
      })
    }
  }


  displayedColumns: string[] = ['ID', 'FROM', 'TO', 'AMOUNT', 'DATE', 'RESULT'];

}
