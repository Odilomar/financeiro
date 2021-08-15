import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../utils';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
})
export class ListUserComponent implements OnInit {
  users: User[] = [];
  total: number = 0;
  take: number = 0;
  skip: number = 0;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.find().then((subscription) =>
      subscription.subscribe(({ data, total, take, skip }) => {
        this.users = data;
        this.total = total;
        this.take = take;
        this.skip = skip;
      })
    );
  }
}
