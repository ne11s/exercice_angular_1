import { Component } from '@angular/core';
import { Book } from '../../models/Book';
import { ChangeEmotePipe } from '../../utils/change-emote-pipe';
@Component({
  selector: 'app-librairie',
  imports: [ChangeEmotePipe],
  templateUrl: './librairie.html',
  styleUrl: './librairie.css'
})
export class Librairie {
  books : Book[]=[
    {
      name: "Harry Potter à l'école des sorciers",
      author: "J.K. Rowling",
      isRead: false
    },
    {
      name: "Le Silence des Agneaux",
      author: "Thomas Harris",
      isRead: false
    },
    {
      name: "Hunger Games",
      author: "Suzanne Collins",
      isRead: false
    },
    {
      name: "Chair de Poule",
      author: "R.L. Stine",
      isRead: false
    },
    {
      name: "Boule et Bill",
      author: "Jean Roba",
      isRead: false
    }
  ];
  change(i : Book){
    console.log(i.isRead);
    
    i.isRead = !i.isRead
  }
}
