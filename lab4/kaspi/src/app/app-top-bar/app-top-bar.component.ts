import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-top-bar',
  templateUrl: './app-top-bar.component.html',
  styleUrl: './app-top-bar.component.css'
})
export class AppTopBarComponent implements OnInit{
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
