import { Component, Input, OnInit } from '@angular/core';
import { GenericFindReturn } from 'src/app/core/utils';
import { faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/pages/user/utils';

@Component({
  selector: 'app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.css'],
})
export class AppListComponent implements OnInit {
  @Input() object = new GenericFindReturn<User>();

  headers: string[] = [];
  data: User[] = [];

  faPlus = faPlus;
  faTrashAlt = faTrashAlt;

  constructor() {}

  ngOnInit(): void {
    this.headers = Object.keys(this.object.data[0]).map((header) =>
      header.replace(/_/g, ' ')
    );
    this.headers.pop();
  }
}
