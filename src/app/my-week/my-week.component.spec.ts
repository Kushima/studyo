import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWeekComponent } from './my-week.component';

describe('MyWeekComponent', () => {
  let component: MyWeekComponent;
  let fixture: ComponentFixture<MyWeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyWeekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
