import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  r_message:any

  constructor() { }

  ngOnInit(): void {
    
  }
  recieve_message(event:any){
    this.r_message = event
    console.log(this.r_message)
  }

}
