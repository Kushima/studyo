import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MyWeekComponent } from './my-week/my-week.component';
import { MateriaComponent } from './materia/materia.component';

const routes: Routes = [
  { path: '', redirectTo: '/new-subject', pathMatch: 'full' },
  { path: 'my-week',  component: MyWeekComponent },
  { path: 'new-subject',  component: MateriaComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}
