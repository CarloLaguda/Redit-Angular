import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    let t = title.value;
    let v= link.value;
    console.log(`Adding article title: `+t+ ` and link: `+ v);
    return false;
  }
  

  title = 'Creddit';
}
