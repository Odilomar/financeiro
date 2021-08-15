import { Component, OnInit } from '@angular/core';
import { GenericFindReturn } from 'src/app/core/utils';
import { TitleService } from '../title.service';
import { Title } from '../utils';

@Component({
  selector: 'app-list-title',
  templateUrl: './list-title.component.html',
  styleUrls: ['./list-title.component.css'],
})
export class ListTitleComponent implements OnInit {
  findTitle = new GenericFindReturn<Title>();

  constructor(private readonly titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.find().then((subscription) =>
      subscription.subscribe((findTitle) => {
        this.findTitle = findTitle;
      })
    );
  }
}
