import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-num-comp',
  templateUrl: './single-num-comp.component.html',
  styleUrls: ['./single-num-comp.component.scss']
})

export class SingleNumCompComponent implements OnInit {
  // Input Parameters
  @Input() description: string = "";
  @Input() value: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
