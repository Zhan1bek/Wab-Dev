import { Component } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {
  model:string | undefined;
  name:string | undefined;
  bag:string | undefined;
  constructor(){}
  ngOnInit() {
    this.model = 'My Shop';
    this.name = 'Checkout';
    this.bag = 'My bag'
  }
}
