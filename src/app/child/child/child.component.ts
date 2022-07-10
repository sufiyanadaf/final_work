import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Output() messageEvent = new EventEmitter()

  value:any

  constructor() { }

  ngOnInit(): void {
  }
  send_message(){
    this.messageEvent.emit(this.value)
    console.log(this.value)
  }
}
