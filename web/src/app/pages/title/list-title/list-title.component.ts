import { Component, OnInit } from '@angular/core';
import { GenericFindReturn } from 'src/app/core/utils';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { TitleService } from '../title.service';
import { Title } from '../utils';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppModalComponent } from 'src/app/shared/app-modal/app-modal.component';

@Component({
  selector: 'app-list-title',
  templateUrl: './list-title.component.html',
  styleUrls: ['./list-title.component.css'],
})
export class ListTitleComponent implements OnInit {
  faPlus = faPlus;
  title = 'Title';
  findTitle = new GenericFindReturn<Title>();

  constructor(
    private readonly titleService: TitleService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.titleService.find().subscribe((findTitle) => {
      this.findTitle = findTitle;
    });
  }

  open(title = new Title()) {
    const modalRef = this.modalService.open(AppModalComponent);
    modalRef.componentInstance.obj = title;
  }
}
