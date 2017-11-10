import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStatCenterComponent } from './card-stat-center.component';

describe('CardStatCenterComponent', () => {
  let component: CardStatCenterComponent;
  let fixture: ComponentFixture<CardStatCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardStatCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardStatCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
