import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})

export class HistoryComponent implements OnInit {
    article: Article[];

  constructor(private DataService:DataService) {
    console.log("constructor ran...");
}

  ngOnInit() {
      this.dataService.getArticle().subscribe((article) => {
          this.article = article;
      })
  }


}

interface Article {
    id: number,
    title: string,
    body: string
}
