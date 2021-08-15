import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppListComponent } from './app-list/app-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [AppListComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [AppListComponent],
})
export class SharedModule {}
