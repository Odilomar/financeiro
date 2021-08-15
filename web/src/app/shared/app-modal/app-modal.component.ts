import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { GenericFindReturn } from 'src/app/core/utils';
import { NonPayment } from 'src/app/pages/nonpayment/utils';
import { TitleService } from 'src/app/pages/title/title.service';
import { Title } from 'src/app/pages/title/utils';
import { UserService } from 'src/app/pages/user/user.service';
import { User } from 'src/app/pages/user/utils';

@Component({
  selector: 'app-modal',
  templateUrl: './app-modal.component.html',
  styleUrls: ['./app-modal.component.css'],
})
export class AppModalComponent implements OnInit {
  @Input() obj: any;

  title: string = '';
  selectUser = new GenericFindReturn<User>();
  selectTitle = new GenericFindReturn<Title>();

  constructor(
    public activeModal: NgbActiveModal,
    private readonly userService: UserService,
    private readonly titleService: TitleService
  ) {}

  ngOnInit(): void {
    if (this.obj instanceof User) {
      this.title = this.obj.id == 0 ? 'Create User' : 'Update User';
    }
    if (this.obj instanceof Title) {
      this.title = this.obj.id == 0 ? 'Create Title' : 'Update Title';
    }
    if (this.obj instanceof NonPayment) {
      if (this.obj.id == 0) {
        this.title = 'Create NonPayment';
        this.userService.find().then((subscription) =>
          subscription.subscribe((user) => {
            this.selectUser = user;
          })
        );
        this.titleService.find().then((subscription) =>
          subscription.subscribe((title) => {
            this.selectTitle = title;
          })
        );
      }
      if (this.obj.id > 0) {
        this.title = 'Update NonPayment';
      }
    }
  }
}
