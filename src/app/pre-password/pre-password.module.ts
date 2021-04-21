import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrePasswordPageRoutingModule } from './pre-password-routing.module';
import { InputModule } from '../components/input/input.module';
import { PrePasswordPage } from './pre-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrePasswordPageRoutingModule,InputModule
  ],
  declarations: [PrePasswordPage]
})
export class PrePasswordPageModule {}
