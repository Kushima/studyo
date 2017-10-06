import { MateriaService } from './materia/materia.service';
import { CustomMaterialModule } from './custom-material/custom-material-module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CustomMaterialModule,
    HttpModule
  ],
  providers: [MateriaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
