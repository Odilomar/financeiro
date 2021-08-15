import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNonpaymentComponent } from './list-nonpayment.component';

describe('ListNonpaymentComponent', () => {
  let component: ListNonpaymentComponent;
  let fixture: ComponentFixture<ListNonpaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListNonpaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNonpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
