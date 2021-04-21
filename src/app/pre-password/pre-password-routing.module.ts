import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrePasswordPage } from './pre-password.page';

const routes: Routes = [
  {
    path: '',
    component: PrePasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrePasswordPageRoutingModule {}
