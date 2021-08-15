import { Component, Input, OnInit } from '@angular/core';
import { GenericFindReturn, TypeEnum } from 'src/app/core/utils';
import { faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/pages/user/utils';
import { Title } from 'src/app/pages/title/utils';

@Component({
  selector: 'app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.css'],
})
export class AppListComponent implements OnInit {
  @Input() object = new GenericFindReturn<User | Title>();

  headers: string[] = [];
  // data: any[] = [];
  data: User[] | Title[] = [];

  faPlus = faPlus;
  faTrashAlt = faTrashAlt;

  constructor() {}

  ngOnInit(): void {
    this.headers = Object.keys(this.object.data[0]).map((header) =>
      header.replace(/_/g, ' ')
    );
    this.headers.pop();

    console.log(this.headers);
  }
}
