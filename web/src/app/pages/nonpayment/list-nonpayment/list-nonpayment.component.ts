import { Component, OnInit } from '@angular/core';
import { GenericFindReturn } from 'src/app/core/utils';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { NonPaymentService } from '../nonpayment.service';
import { NonPayment } from '../utils';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppModalComponent } from 'src/app/shared/app-modal/app-modal.component';

@Component({
  selector: 'app-list-nonpayment',
  templateUrl: './list-nonpayment.component.html',
  styleUrls: ['./list-nonpayment.component.css'],
})
export class ListNonPaymentComponent implements OnInit {
  faPlus = faPlus;
  title = 'Non-Payment';
  findNonPayment = new GenericFindReturn<NonPayment>();

  constructor(
    private readonly nonPaymentService: NonPaymentService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.nonPaymentService.find().subscribe((findNonPayment) => {
      this.findNonPayment = findNonPayment;
    });
  }

  open(nonPayment = new NonPayment()) {
    const modalRef = this.modalService.open(AppModalComponent);
    modalRef.componentInstance.obj = nonPayment;
    modalRef.result.then(() => this.reload);
  }

  reload() {
    this.nonPaymentService.find().subscribe((findNonPayment) => {
      this.findNonPayment = findNonPayment;
    });
  }
}
