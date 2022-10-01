import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MessagesComponent } from './messages/messages.component';
import { RateComponent } from './rate/rate.component';

const routes: Routes = [
  { path: '', redirectTo: '/rate', pathMatch: 'full' },
  { path: 'rate', component: RateComponent },
  { path: 'messages', component: MessagesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
