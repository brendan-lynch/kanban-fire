import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { Task } from './task/task';
import { TaskComponent } from "./task/task.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    CommonModule,
    RouterOutlet,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    TaskComponent
  ]
})
export class AppComponent {
  title = 'kanban-fire';
  todo: Task[] = [
    {
      title: 'Buy milk',
      description: 'Go to the store and buy milk',
      id: ''
    },
    {
      title: 'Create a Kanban app',
      description: 'Using Firebase and Angular create a Kanban app!',
      id: ''
    }
  ];
}
