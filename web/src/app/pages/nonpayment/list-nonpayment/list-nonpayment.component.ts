import { Component, OnInit } from '@angular/core';
import { GenericFindReturn } from 'src/app/core/utils';
import { NonPaymentService } from '../nonpayment.service';
import { NonPayment } from '../utils';

@Component({
  selector: 'app-list-nonpayment',
  templateUrl: './list-nonpayment.component.html',
  styleUrls: ['./list-nonpayment.component.css'],
})
export class ListNonPaymentComponent implements OnInit {
  findNonPayment = new GenericFindReturn<NonPayment>();

  constructor(private readonly nonPaymentService: NonPaymentService) {}

  ngOnInit(): void {
    this.nonPaymentService.find().then((subscription) =>
      subscription.subscribe((findNonPayment) => {
        this.findNonPayment = findNonPayment;
      })
    );
  }
}
