import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../models/Book';

@Pipe({
  name: 'changeEmote'
})
export class ChangeEmotePipe implements PipeTransform {

  transform(value: boolean):  string{ 
    return value ? "👍":"👎"
  }

}
