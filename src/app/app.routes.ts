import { Routes } from '@angular/router';
import { Counter } from './components/counter/counter';
import { Series } from './components/series/series';
import { Pipes } from './components/pipes/pipes';
import { Librairie } from './components/librairie/librairie';

export const routes: Routes = [
    {path:"exo1" , component: Counter},
    {path:"exo2", component : Series},
    {path:"exo3", component: Pipes},
    {path:"exo4", component: Librairie}
];
