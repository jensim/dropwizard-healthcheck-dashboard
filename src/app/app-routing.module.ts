import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardListComponent} from './dashboard/dashboard-list/dashboard-list.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'dashboard-list', component: DashboardListComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
