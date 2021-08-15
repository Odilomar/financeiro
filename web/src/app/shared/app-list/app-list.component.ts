import { Component, Input, OnInit } from '@angular/core';
import {
  GenericFindReturn,
  isInstanceOfNonPayment,
  isInstanceOfTitle,
  isInstanceOfUser,
} from 'src/app/core/utils';
import { faPlus, faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/pages/user/utils';
import { Title } from 'src/app/pages/title/utils';
import { NonPayment } from 'src/app/pages/nonpayment/utils';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppModalComponent } from '../app-modal/app-modal.component';
import { UserService } from 'src/app/pages/user/user.service';
import { TitleService } from 'src/app/pages/title/title.service';
import { NonPaymentService } from 'src/app/pages/nonpayment/nonpayment.service';

@Component({
  selector: 'app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.css'],
})
export class AppListComponent implements OnInit {
  @Input() object = new GenericFindReturn<User | Title | NonPayment>();

  headers: string[] = [
    'id',
    'name',
    'user',
    'title',
    'value',
    'created at',
    'updated at',
  ];
  data: User[] | Title[] | NonPayment[] = [];

  faPlus = faPlus;
  faTrashAlt = faTrashAlt;
  faEdit = faEdit;

  constructor(
    private modalService: NgbModal,
    private readonly userService: UserService,
    private readonly titleService: TitleService,
    private readonly nonPaymentService: NonPaymentService
  ) {}

  ngOnInit(): void {
    const obj = Object.keys(this.object.data[0]).map((value) =>
      value.replace(/_/g, ' ')
    );
    this.headers = this.headers.filter((header) => obj.includes(header));
  }

  open(obj: any) {
    const modalRef = this.modalService.open(AppModalComponent);
    modalRef.componentInstance.obj = obj;
  }

  delete(obj: any) {
    if (isInstanceOfUser(obj)) this.userService.delete(obj.id).subscribe();
    if (isInstanceOfTitle(obj)) this.titleService.delete(obj.id).subscribe();
    if (isInstanceOfNonPayment(obj))
      this.nonPaymentService.delete(obj.id).subscribe();
  }
}
