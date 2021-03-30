import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactPageRoutingModule } from './contact-routing.module';

import { InputModule } from '../components/input/input.module';
import { ContactPage } from './contact.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputModule,
    ContactPageRoutingModule,
    
  ],
  declarations: [ContactPage]
})
export class ContactPageModule {}
