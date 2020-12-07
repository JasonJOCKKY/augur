import { Component, Input, OnInit } from '@angular/core';

import { code_change } from "./test_data";

// For testing

@Component({
  selector: 'app-plot-comp',
  templateUrl: './plot-comp.component.html',
  styleUrls: ['./plot-comp.component.scss']
})
export class PlotCompComponent implements OnInit {
  // @Input() 

  public data = [
    {
      x: [""],
      y: [0],
      type: 'scatter',
      marker: { 
        // color: 'blue' 
      }
    }
  ];

  public layout = {
    width: 520,
    height: 240,
    margin: {
      l: 20,
      r: 20,
      t: 20,
      b: 20
    },
    font: {
      family: 'Roboto, "Helvetica Neue", sans-serif;',
    }
  }

  public config = {
    // displayModeBar: false,
    staticPlot: true
  }

  constructor() { }

  ngOnInit(): void {
    var x: string[] = [];
    var y: number[] = [];
    
    code_change.sort(function (a, b) {
      let date1 = new Date(a["date"]);
      let date2 = new Date(b["date"]);
      return date1.getTime() - date2.getTime();
    });



    code_change.forEach(function (change) {
      x.push(change["date"]);
      y.push(change["commit_count"]);
    });
    

    this.data[0].x = x;
    this.data[0].y = y;
    // this.revision += 1;
  }

}
