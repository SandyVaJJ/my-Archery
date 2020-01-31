import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoundsComponent } from './rounds/rounds.component';
import { Route } from '@angular/compiler/src/core';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { RoundDetailComponent } from "./round-detail/round-detail.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'rounds', component: RoundsComponent },
  { path: 'detail/:id', component: RoundDetailComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
