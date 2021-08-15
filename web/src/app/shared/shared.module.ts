import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppListComponent } from './app-list/app-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppNavComponent } from './app-nav/app-nav.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [AppListComponent, AppNavComponent],
  imports: [CommonModule, AppRoutingModule, FontAwesomeModule],
  exports: [AppListComponent, AppNavComponent],
})
export class SharedModule {}
