import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tog',
  templateUrl: './tog.component.html',
  styleUrls: ['./tog.component.css']
})
export class TogComponent  {

  num:number=0;
  Number=0;
  add(){
      this.Number+=Math.floor(Math.random() * 10);
      this.num=this.Number;

  }
  minus(){
    this.Number-=Math.floor(Math.random() * 10);
      this.num=this.Number;
  } 


}


