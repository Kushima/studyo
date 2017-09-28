import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdButtonModule,
  MdCheckboxModule,
  MatInputModule,
  MatGridListModule,
  MatCardModule,
  MatToolbarModule,
  MatIconModule
} from '@angular/material';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports: [
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule
  ],
})
export class CustomMaterialModule { }
