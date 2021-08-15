import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppListComponent } from './app-list/app-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppNavComponent } from './app-nav/app-nav.component';
import { AppRoutingModule } from '../app-routing.module';
import { AppModalComponent } from './app-modal/app-modal.component';

@NgModule({
  declarations: [AppListComponent, AppNavComponent, AppModalComponent],
  imports: [CommonModule, AppRoutingModule, FontAwesomeModule],
  exports: [AppListComponent, AppNavComponent, AppModalComponent],
})
export class SharedModule {}
