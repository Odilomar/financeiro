import { Component, OnInit } from '@angular/core';
import { GenericFindReturn } from 'src/app/core/utils';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../user.service';
import { User } from '../utils';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppModalComponent } from 'src/app/shared/app-modal/app-modal.component';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
})
export class ListUserComponent implements OnInit {
  faPlus = faPlus;
  title = 'User';
  findUser = new GenericFindReturn<User>();

  constructor(
    private userService: UserService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.userService.find().subscribe((findUser) => {
      this.findUser = findUser;
    });
  }

  open(user = new User()) {
    const modalRef = this.modalService.open(AppModalComponent);
    modalRef.componentInstance.obj = user;
    modalRef.result.then(() => this.reload);
  }

  reload() {
    this.userService.find().subscribe((findUser) => {
      this.findUser = findUser;
    });
  }
}
