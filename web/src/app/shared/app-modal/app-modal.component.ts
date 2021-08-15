import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { GenericFindReturn } from 'src/app/core/utils';
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

  title: string = '';
  selectUser = new GenericFindReturn<User>();
  selectTitle = new GenericFindReturn<Title>();

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
    if (this.obj.id != 0)
      this.userService.update(user.id, { ...user }).subscribe();
  }

  private saveTitle() {
    if (!this.obj.title) console.log('error');

    const title = this.obj;

    if (this.obj.id == 0) this.titleService.create({ ...title }).subscribe();
    if (this.obj.id != 0)
      this.titleService.update(title.id, { ...title }).subscribe();
  }

  private saveNonPayment() {
    if (!this.obj.value) console.log('error');

    const nonPayment = this.obj;
    if (this.obj.id == 0)
      this.nonPaymentService.create({ ...nonPayment }).subscribe();
    if (this.obj.id != 0)
      this.nonPaymentService
        .update(nonPayment.id, { ...nonPayment })
        .subscribe();
  }

  isUser() {
    return this.obj instanceof User || this.obj.name;
  }

  isTitle() {
    return this.obj instanceof Title || (this.obj.title && !this.obj.title_id);
  }

  isNonPayment() {
    return this.obj instanceof NonPayment || this.obj.user_id;
  }

  ngOnInit(): void {
    if (this.isUser()) {
      this.title = this.obj.id == 0 ? 'Create User' : 'Update User';
    }
    if (this.isNonPayment()) {
      if (this.obj.id == 0) {
        this.title = 'Create NonPayment';
        this.userService.find().subscribe((user) => {
          this.selectUser = user;
        });
        this.titleService.find().subscribe((title) => {
          this.selectTitle = title;
        });
      }
      if (this.obj.id > 0) {
        this.title = 'Update NonPayment';
      }
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
