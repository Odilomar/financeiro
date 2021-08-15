import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {
  DEFUALT_TAKE,
  GenericFindReturn,
  isInstanceOfNonPayment,
  isInstanceOfTitle,
  isInstanceOfUser,
} from 'src/app/core/utils';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { NonPayment } from 'src/app/pages/nonpayment/utils';
import { TitleService } from 'src/app/pages/title/title.service';
import { Title } from 'src/app/pages/title/utils';
import { UserService } from 'src/app/pages/user/user.service';
import { User } from 'src/app/pages/user/utils';
import { NonPaymentService } from 'src/app/pages/nonpayment/nonpayment.service';

@Component({
  selector: 'app-modal',
  templateUrl: './app-modal.component.html',
  styleUrls: ['./app-modal.component.css'],
})
export class AppModalComponent implements OnInit {
  @Input() obj: any;
  @Output() reload = new EventEmitter<boolean>();

  title: string = '';
  selectUser = new GenericFindReturn<User>();
  selectTitle = new GenericFindReturn<Title>();

  selectedUser: number = 0;
  selectedTitle: number = 0;

  faSave = faSave;

  constructor(
    public activeModal: NgbActiveModal,
    private readonly userService: UserService,
    private readonly titleService: TitleService,
    private readonly nonPaymentService: NonPaymentService
  ) {}

  private saveUser() {
    if (!this.obj.name) console.log('error');

    const user = this.obj;
    if (this.obj.id == 0) this.userService.create({ ...user }).subscribe();
    if (this.obj.id != 0) {
      this.userService.update(user.id, { ...user }).subscribe();
      this.userService.findOne(user.id).subscribe((returnedUser) => {
        this.obj = returnedUser;
      });
    }
  }

  private saveTitle() {
    if (!this.obj.title) console.log('error');

    const title = this.obj;

    if (this.obj.id == 0) this.titleService.create({ ...title }).subscribe();
    if (this.obj.id != 0) {
      this.titleService.update(title.id, { ...title }).subscribe();
      this.titleService.findOne(title.id).subscribe((returnedTitle) => {
        this.obj = returnedTitle;
      });
    }
  }

  private saveNonPayment() {
    if (!this.obj.value) console.log('error');
    if (this.selectedUser == 0) console.log('error');
    if (this.selectedTitle == 0) console.log('error');

    if (this.obj.id == 0)
      this.nonPaymentService
        .create({
          value: this.obj.value,
          title_id: Number(this.selectedTitle),
          user_id: Number(this.selectedUser),
        })
        .subscribe();
    if (this.obj.id != 0) {
      this.nonPaymentService
        .update(this.obj.id, {
          value: this.obj.value,
          title_id: Number(this.selectedTitle),
          user_id: Number(this.selectedUser),
        })
        .subscribe();

      this.nonPaymentService
        .findOne(this.obj.id)
        .subscribe((returnedNonPayment) => {
          this.obj = returnedNonPayment;
        });
    }
  }

  isUser() {
    return isInstanceOfUser(this.obj);
  }

  isTitle() {
    return isInstanceOfTitle(this.obj);
  }

  isNonPayment() {
    return isInstanceOfNonPayment(this.obj);
  }

  ngOnInit(): void {
    if (this.isUser()) {
      this.title = this.obj.id == 0 ? 'Create User' : 'Update User';
    }
    if (this.isNonPayment()) {
      let take: number = DEFUALT_TAKE;

      if (this.obj.id == 0) {
        this.title = 'Create NonPayment';
      }
      if (this.obj.id > 0) {
        take -= 1;
        this.title = 'Update NonPayment';
        this.selectedUser = this.obj.user_id;
        this.selectedTitle = this.obj.title_id;

        this.userService.findOne(this.selectedUser).subscribe((user) => {
          Object.assign(this.selectUser, {
            data: [...this.selectUser.data, user],
          });
        });
        this.titleService.findOne(this.selectedTitle).subscribe((title) => {
          Object.assign(this.selectTitle, {
            data: [...this.selectTitle.data, title],
          });
        });
      }

      this.userService.find({ take }).subscribe((user) => {
        this.selectUser = user;
      });
      this.titleService.find({ take }).subscribe((title) => {
        this.selectTitle = title;
      });
    }
    if (this.isTitle()) {
      this.title = this.obj.id == 0 ? 'Create Title' : 'Update Title';
    }
  }

  save() {
    if (this.isUser()) this.saveUser();
    if (this.isNonPayment()) this.saveNonPayment();
    if (this.isTitle()) this.saveTitle();

    this.activeModal.close();
  }
}
