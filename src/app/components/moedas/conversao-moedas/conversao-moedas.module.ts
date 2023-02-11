import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

import { ConversaoMoedasComponent } from './conversao-moedas.component';
import { MoedasServiceModule } from './../services/moedas.service.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MoedasServiceModule
  ],
  exports: [ConversaoMoedasComponent],
  declarations: [ConversaoMoedasComponent],
  providers: [],
})
export class ConversaoMoedasModule { }
