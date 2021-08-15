import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserModule } from './user/user.module';
import { TitleModule } from './title/title.module';
import { NonPaymentModule } from './nonpayment/nonpayment.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, UserModule, TitleModule, NonPaymentModule],
})
export class PagesModule {}
