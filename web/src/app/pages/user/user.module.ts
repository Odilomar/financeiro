import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUserComponent } from './list-user/list-user.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ListUserComponent],
  imports: [CommonModule, SharedModule],
})
export class UserModule {}
