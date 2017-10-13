import { MateriaService } from './materia/materia.service';
import { CustomMaterialModule } from './custom-material/custom-material-module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MateriaComponent } from './materia/materia.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MateriaComponent
  ],
  imports: [
    BrowserModule,
    CustomMaterialModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [MateriaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
