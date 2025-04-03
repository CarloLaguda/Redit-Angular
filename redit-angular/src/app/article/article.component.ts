import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit {
  @Input() article: Article
  @HostBinding('attr.class') cssClass = 'card mt-5';
  constructor() {
    this.article = new Article('','',0);
  }

  voteUp(): Boolean {
    this.article.voteUp(); 
    return false;
  }

  voteDown():Boolean {
    this.article.voteDown();
    return false;
  }

  ngOnInit() {}
}