import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleNumCompComponent } from './single-num-comp.component';

describe('SingleNumCompComponent', () => {
  let component: SingleNumCompComponent;
  let fixture: ComponentFixture<SingleNumCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleNumCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleNumCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
