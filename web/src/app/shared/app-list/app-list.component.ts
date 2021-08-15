import { Component, Input, OnInit } from '@angular/core';
import { GenericFindReturn, TypeEnum } from 'src/app/core/utils';
import { faPlus, faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/pages/user/utils';
import { Title } from 'src/app/pages/title/utils';
import { NonPayment } from 'src/app/pages/nonpayment/utils';

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

  constructor() {}

  ngOnInit(): void {
    const obj = Object.keys(this.object.data[0]).map((value) =>
      value.replace(/_/g, ' ')
    );
    this.headers = this.headers.filter((header) => obj.includes(header));
  }
}
