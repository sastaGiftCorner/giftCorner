import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './home/home.component';
import { BirthDayComponent } from './pages/birth-day/birth-day.component';
import { ToysComponent } from './pages/toys/toys.component';

const routes: Routes = [
  {path: " ", component: HomeComponent},
  {path: "home", component: HomeComponent},
  {path: "admin", component: AdminDashboardComponent},
  {path: "toys", component: ToysComponent},
  {path: "birthday", component: BirthDayComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
