import { Component } from '@angular/core';
import { log } from 'node:console';

@Component({
  selector: 'app-series',
  imports: [],
  templateUrl: './series.html',
  styleUrl: './series.css'
})
export class Series {
  seri : string[] = ["Squide games","Breaking bad ", "Game of throne", "Rick & morty"]
  delet(i:string) {
    console.log(this.seri);
    
    this.seri = this.seri.filter(serii=>serii!=i);
    
    console.log(this.seri);
  }
}
