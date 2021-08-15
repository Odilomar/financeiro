import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListNonPaymentComponent } from './list-nonpayment/list-nonpayment.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [ListNonPaymentComponent],
  imports: [CommonModule, SharedModule, FontAwesomeModule],
})
export class NonPaymentModule {}
