import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter {
  pair : number = 0;

  incremente() : void{
    this.pair++
  }

  decremente() : void {
    this.pair--
  }
}
