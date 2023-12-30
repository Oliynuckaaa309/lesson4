import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { ParentComponentComponent } from './parent-component/parent-component.component';
import {ChildComponentComponent} from './parent-component/child-component/child-component.component'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule, RouterOutlet,ChildComponentComponent, ParentComponentComponent, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lesson04';
}
