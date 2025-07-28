import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from "./components/counter/counter";
import { Navbar } from "./components/navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [ Navbar ,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('exercice_angular_1');
}
