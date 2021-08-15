import { Component, OnInit } from '@angular/core';
import { GenericFindReturn } from 'src/app/core/utils';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../user.service';
import { User } from '../utils';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
})
export class ListUserComponent implements OnInit {
  faPlus = faPlus;
  title = 'User';
  findUser = new GenericFindReturn<User>();

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.find().then((subscription) =>
      subscription.subscribe((findUser) => {
        this.findUser = findUser;
      })
    );
  }
}
