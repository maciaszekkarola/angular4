import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})

export class HistoryComponent implements OnInit {
    posts: Post[];

  constructor(private dataService:DataService) {
    console.log("constructor ran...");
}

  ngOnInit() {
      this.dataService.getPost().subscribe((posts) => {
          this.posts = posts;
      })
  }


}

interface Post {
    id: number,
    title: string,
    body: string
}
