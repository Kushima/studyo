import { SubjectDayService } from './subject-day/service/subject-day.service';
import { MateriaService } from './materia/materia.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MateriaComponent } from './materia/materia.component';

import { AppRoutingModule } from './app-routing.module';
import { MyWeekComponent } from './my-week/my-week.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { Globals } from './global/globals';

@NgModule({
  declarations: [
    AppComponent,
    MateriaComponent,
    MyWeekComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [MateriaService, SubjectDayService, LoginService, Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
