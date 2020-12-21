import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AugurBackendService {
  // Properties
  backend_api: string = "";

  constructor(
    private http: HttpClient
  ) { 
    this.backend_api = environment.backend_api;
  }

  /** For Metrics Data */
  getTotalForks(repo_id: string) {
    const url = this.backend_api + '/repos/' + repo_id + '/fork-count';
    return this.http.get(url);
  }

  getContributors(repo_id: string) {
    const url = this.backend_api + '/repos/' + repo_id + '/contributors';
    return this.http.get(url);
  }

  /// new issues / week
  getNewissues(repo_id: string) {
    const url = this.backend_api + '/repos/' + repo_id + '/issues-new';
    return this.http.get(url);
  }

  /// new contributors / week
  getNewContributors(repo_id: string) {
    const url = this.backend_api + '/repos/' + repo_id + '/contributors-new';
    return this.http.get(url);
  }

  /// new commits / week
  getCommits(repo_id: string) {
    const url = this.backend_api + '/repos/' + repo_id + '/code-changes';
    return this.http.get(url);
  }

  /// new reviews / week
  getReviews(repo_id: string) {
    const url = this.backend_api + '/repos/' + repo_id + '/reviews';
    return this.http.get(url);
  }
}
