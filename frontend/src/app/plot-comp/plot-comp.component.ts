import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-plot-comp',
  templateUrl: './plot-comp.component.html',
  styleUrls: ['./plot-comp.component.scss']
})
export class PlotCompComponent implements OnInit {
  // @Input() 

  public graph = {
    data: [
      { x: [1, 2, 3], y: [2, 6, 3], type: 'scatter', mode: 'lines+points', marker: { color: 'red' } },
      { x: [1, 2, 3], y: [2, 5, 3], type: 'bar' },
    ],
    layout: { width: 320, height: 240, title: 'A Fancy Plot' }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
