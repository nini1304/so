import {Component, ViewChild} from '@angular/core';
import {RecordDto} from "../../dto/record.dto";
import {CurrencyService} from "../../service/currency.service";
import {MatTableDataSource} from "@angular/material/table";
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent {
  recordDto:RecordDto[]
  pages:number=0
  total:number=0
  constructor(private service:CurrencyService, private keycloakService: KeycloakService) {
  }
  dataSource:any;
  ngOnInit(){
    this.service.recordCurrency().subscribe({
      next:data=>{
        this.recordDto=data.content
        this.dataSource = new MatTableDataSource(this.recordDto);
        this.total=data.totalpages
      }
    })
  }
  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }
  increment(){
    if(this.pages<this.total){
      this.pages++
      this.service.recordCurrency().subscribe({
        next:data=>{
          this.recordDto=data.content
          this.total=data.totalpages
        }
      })
    }
  }
  decrement(){
    if(this.pages!=0){
      this.pages--
      this.service.recordCurrency().subscribe({
        next:data=>{
          this.recordDto=data.content
          this.total=data.totalpages
        }
      })
    }
  }
  logout() {
    this.keycloakService.logout("http://localhost:4200");
  }

  displayedColumns: string[] = ['ID', 'FROM', 'TO', 'AMOUNT', 'DATE', 'RESULT'];

}
