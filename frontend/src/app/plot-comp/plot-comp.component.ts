import { Component, Input, OnInit } from '@angular/core';
import { GraphData } from '../../models/metrics.model';

// For testing

@Component({
  selector: 'app-plot-comp',
  templateUrl: './plot-comp.component.html',
  styleUrls: ['./plot-comp.component.scss']
})
export class PlotCompComponent implements OnInit {
  @Input() description: string = "";
  @Input() graphData?: GraphData[];

  // Config for the plot
  public data = [
    {
      x: [""],
      y: [0],
      type: 'scatter'
    }
  ];

  public layout = {
    width: 520,
    height: 300,
    margin: {
      l: 30,
      r: 20,
      t: 20,
      b: 30
    },
    font: {
      family: 'Roboto, "Helvetica Neue", sans-serif;',
    }
  }

  public config = {
    staticPlot: true
  }

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    var x: string[] = [];
    var y: number[] = [];

    this.graphData?.forEach(entry => {
      x.push(entry.date);
      y.push(entry.value);
    });

    this.data[0].x = x;
    this.data[0].y = y;
  }
}
