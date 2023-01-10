import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent implements OnInit {
@Input() item:string | undefined
@Output() onDelete = new EventEmitter()
@Output() onCancel = new EventEmitter()


  constructor() { }

  ngOnInit(): void {
    
  }
  yes(){
this.onDelete.emit()
  }
  no(){
this.onCancel.emit(this.item)
  }

}
