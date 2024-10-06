import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandingFlexCardsComponent } from './expanding-flex-cards.component';

describe('ExpandingFlexCardsComponent', () => {
  let component: ExpandingFlexCardsComponent;
  let fixture: ComponentFixture<ExpandingFlexCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpandingFlexCardsComponent]
    });
    fixture = TestBed.createComponent(ExpandingFlexCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
