import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTitleComponent } from './pages/title/list-title/list-title.component';
import { ListUserComponent } from './pages/user/list-user/list-user.component';

const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: 'user', component: ListUserComponent },
  { path: 'title', component: ListTitleComponent },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
