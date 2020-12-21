import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-metrics-page',
  templateUrl: './metrics-page.component.html',
  styleUrls: ['./metrics-page.component.scss']
})
export class MetricsPageComponent implements OnInit {
  // Parameters
  isValideRoute: Boolean = true;

  // Metrics Data
  metrics = {
    title: "Name of the repo",
    single_num_metrics: [
      {
        description: "Total number of forks",
        value: "1640"
      },
      {
        description: "Total number of contributors",
        value: "587"
      }
    ],
    graph_metrics: [
      {
        description: "New Issues / Week",
        data: []
      },
      {
        description: "New Contributors / Week",
        data: []
      },
      {
        description: "Commits / Week",
        data: []
      },
      {
        description: "Reviews / Week",
        data: []
      }
    ]
  };
  
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const repo_id = this.route.snapshot.paramMap.get("repo_id");
    if (!repo_id)
    {
      this.isValideRoute = false;
      return;
    }
    
    this.retrieveMetrics(repo_id);
  }

  retrieveMetrics(repo_id: string) {
    if (!repo_id)
    {
      return false;
    }
    
    return true;
  }

}
