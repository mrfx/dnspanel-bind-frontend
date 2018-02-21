import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NowaDomenaComponent } from './nowa-domena.component';

describe('NowaDomenaComponent', () => {
  let component: NowaDomenaComponent;
  let fixture: ComponentFixture<NowaDomenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NowaDomenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NowaDomenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
