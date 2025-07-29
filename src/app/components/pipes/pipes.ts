import { Component } from '@angular/core';
import { TriPipePipe } from '../../utils/tri-pipe-pipe';

@Component({
  selector: 'app-pipes',
  imports: [TriPipePipe],
  templateUrl: './pipes.html',
  styleUrl: './pipes.css'
})
export class Pipes {
  ordre :string = "asc"
  seri : string[] = ["Squide games","Breaking bad ", "Game of throne", "Rick & morty"]
  reverse(order : string) {
    this.ordre = this.ordre === "asc" && order === "desc" ? "desc" : order === "asc" ? "asc" : "desc"
    console.log(this.ordre);
    
  }
}
