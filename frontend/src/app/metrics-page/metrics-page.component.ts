import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GraphData, Metrics } from 'src/models/metrics.model';
import { AugurBackendService } from '../augur-backend.service';

@Component({
  selector: 'app-metrics-page',
  templateUrl: './metrics-page.component.html',
  styleUrls: ['./metrics-page.component.scss']
})
export class MetricsPageComponent implements OnInit {
  // Parameters
  errorMessage?: string = undefined;

  // Metrics Data
  metrics: Metrics = {
    repo_name: "",
    single_num_metrics: [
      {
        description: "Total number of forks",
        value: undefined
      },
      {
        description: "Total number of contributors",
        value: undefined
      }
    ],
    graph_metrics: [
      {
        description: "New Issues / Week",
        data: undefined
      },
      {
        description: "New Contributors / Week",
        data: undefined
      },
      {
        description: "Commits / Week",
        data: undefined
      },
      {
        description: "Reviews / Week",
        data: undefined
      }
    ]
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private backend: AugurBackendService
  ) { }

  ngOnInit(): void {
    const repo_id = this.route.snapshot.paramMap.get("repo_id");
    if (!repo_id) {
      this.errorMessage = "Please enter a repo ID.";
      return;
    }

    this.retrieveMetrics(repo_id);
  }

  navigateToGroup() {
    this.router.navigateByUrl('/');
  }

  retrieveMetrics(repo_id: string) {
    // Get Title and single number metrics
    this.backend.getTotalForks(repo_id).subscribe({
      next: data => {
        this.metrics.repo_name = (data as any)[0]['repo_name'];
        this.metrics.single_num_metrics[0].value = (data as any)[0]['forks'];
      },
      error: error => {
        this.errorMessage = error.message;
      }
    });

    this.backend.getContributors(repo_id).subscribe({
      next: data => {
        this.metrics.single_num_metrics[1].value = (data as any[]).length;
      },
      error: error => {
        this.errorMessage = error.message;
      }
    });

    // Get graph metrics
    this.backend.getNewissues(repo_id).subscribe({
      next: data => {
        this.metrics.graph_metrics[0].data = this.processGraphData(data as any[], "issues");
      },
      error: error => {
        this.errorMessage = error.message;
      }
    });

    this.backend.getNewContributors(repo_id).subscribe({
      next: data => {
        this.metrics.graph_metrics[1].data = this.processGraphData(data as any[], "new_contributors");
      },
      error: error => {
        this.errorMessage = error.message;
      }
    });

    this.backend.getCommits(repo_id).subscribe({
      next: data => {
        this.metrics.graph_metrics[2].data = this.processGraphData(data as any[], "commit_count");
      },
      error: error => {
        this.errorMessage = error.message;
      }
    });

    this.backend.getReviews(repo_id).subscribe({
      next: data => {
        this.metrics.graph_metrics[3].data = this.processGraphData(data as any[], "pull_requests");
      },
      error: error => {
        this.errorMessage = error.message;
      }
    });

    return true;
  }

  processGraphData(data: any[], value_name: string) {
    var result = new Array<GraphData>();
    data.forEach(entry => {
      result.push({
        date: entry['date'],
        value: entry[value_name]
      });
    });

    result.sort((a, b) => {
      let date1 = new Date(a.date);
      let date2 = new Date(b.date);
      return date1.getTime() - date2.getTime();
    });

    return result;
  }
}
