import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotCompComponent } from './plot-comp.component';

describe('PlotCompComponent', () => {
  let component: PlotCompComponent;
  let fixture: ComponentFixture<PlotCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlotCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
