import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'triPipe',
  standalone: true
})
export class TriPipePipe implements PipeTransform {

  transform(value: string[], order: string): string[] {
    return order ==="esc" ? value.sort() : value.sort((a,b)=>{ return 1})
  }

}
