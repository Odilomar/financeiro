import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTitleComponent } from './list-title/list-title.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [ListTitleComponent],
  imports: [CommonModule, SharedModule, FontAwesomeModule],
})
export class TitleModule {}
