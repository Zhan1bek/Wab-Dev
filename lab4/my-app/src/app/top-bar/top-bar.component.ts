import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatToolbar, MatToolbarRow} from "@angular/material/toolbar";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-top-bar',
  standalone: true,
    imports: [
        MatIcon,
        MatToolbar,
        MatToolbarRow,
        RouterLink
    ],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {

}
