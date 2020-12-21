import { Component, OnInit } from '@angular/core';



export interface RepoGroup {
  name: string;
  description: string;
  url: string;
  lastModified: string;
  type: string;
}

const repoGroups: RepoGroup[] = [
  {url: '1', name: 'Competitors', description: 'Zephyr Competitors', lastModified: '12/29/2019 8:38 PM', type: ' '},
  {url: 'https://wwww.zephyrproject.org', name: 'Zephyr-RTOS', description: 'Zephyr Project GitHub Ecystem', lastModified: '8/6/2019 4:16 PM', type: 'GitHub Organization'},
  {url: '3', name: 'Group 3', description: 'Example Group', lastModified: '12/20/2020 10:51 PM', type: 'Example'},
  {url: '4', name: 'Group 4', description: 'Example Group', lastModified: '12/19/2020 6:43 PM', type: 'Example'},
  {url: '5', name: 'Group 5', description: 'Example Group', lastModified: '12/21/2020 11:57 PM', type: 'Example'},
];


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  displayedColumns: string[] = ['name', 'description', 'url', 'lastModified' , 'type'];
  dataSource = repoGroups;


  constructor() { }

  ngOnInit(): void {
  }

}
