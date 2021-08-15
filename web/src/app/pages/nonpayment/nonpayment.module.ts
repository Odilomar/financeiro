import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListNonPaymentComponent } from './list-nonpayment/list-nonpayment.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ListNonPaymentComponent],
  imports: [CommonModule, SharedModule],
})
export class NonPaymentModule {}
