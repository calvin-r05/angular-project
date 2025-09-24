import { Routes } from '@angular/router';
import { RecentSearchesComponent } from './recent-searches/recent-searches.component';
import { AppComponent } from './app.component';
import { DigimonFinderComponent } from './digimon-finder/digimon-finder.component';

export const routes: Routes = [

    {path: '' , component: DigimonFinderComponent},
    { path:'recent-searches', component: RecentSearchesComponent}
];
