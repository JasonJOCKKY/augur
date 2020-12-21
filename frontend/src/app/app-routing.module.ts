import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages
import { MetricsPageComponent } from './metrics-page/metrics-page.component';
import { RepoListComponent } from './repo-list/repo-list.component';

const routes: Routes = [
  { path: 'repos', component: RepoListComponent },
  { path: 'metrics/:repo_id/:group_id', component: MetricsPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
