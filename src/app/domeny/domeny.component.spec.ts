import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomenyComponent } from './domeny.component';

describe('DomenyComponent', () => {
  let component: DomenyComponent;
  let fixture: ComponentFixture<DomenyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomenyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomenyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
