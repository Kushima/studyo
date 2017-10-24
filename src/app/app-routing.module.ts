import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MateriaComponent } from './materia/materia.component';

const routes: Routes = [
  { path: '', redirectTo: '/materia', pathMatch: 'full' },
  { path: 'materia',  component: MateriaComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}
