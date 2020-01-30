import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoundsComponent } from './rounds/rounds.component';
import { Route } from '@angular/compiler/src/core';

const routes: Route = [
  {path: 'rounds', component: RoundsComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
