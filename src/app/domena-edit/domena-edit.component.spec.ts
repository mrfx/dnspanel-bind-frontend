import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomenaEditComponent } from './domena-edit.component';

describe('DomenaEditComponent', () => {
  let component: DomenaEditComponent;
  let fixture: ComponentFixture<DomenaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomenaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomenaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
