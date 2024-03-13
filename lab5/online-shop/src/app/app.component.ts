import { Component } from '@angular/core';
import { category } from './categories';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories = category;
}
