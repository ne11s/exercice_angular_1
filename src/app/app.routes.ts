import { Routes } from '@angular/router';
import { Counter } from './components/counter/counter';
import { Series } from './components/series/series';

export const routes: Routes = [
    {path:"exo1" , component: Counter},
    {path:"exo2", component : Series}
];
