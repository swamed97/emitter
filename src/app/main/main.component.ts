import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
accno:any
  constructor() { }

  ngOnInit(): void {
  }
  delete(){
this.accno = 2
console.log("mm",this.accno)
  }
  cancel(){
this.accno = ''
  }
  deleted(event:any){
alert('account deleted successfully')
  }
}
