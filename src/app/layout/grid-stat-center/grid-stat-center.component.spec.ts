import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridStatCenterComponent } from './grid-stat-center.component';

describe('GridStatCenterComponent', () => {
  let component: GridStatCenterComponent;
  let fixture: ComponentFixture<GridStatCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridStatCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridStatCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
