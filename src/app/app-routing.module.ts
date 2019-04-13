import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardListComponent} from './dashboard/dashboard-list/dashboard-list.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard-list',
    pathMatch: 'full'
  },
  {path: 'dashboard-list', component: DashboardListComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
