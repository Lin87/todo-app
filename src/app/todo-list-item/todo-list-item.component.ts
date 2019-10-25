import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../firestore/task.model';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {

  @Input() todo: Task;

  formattedTimestamp: string;
  
  constructor() { }

  ngOnInit() {
    this.formattedTimestamp = this.todo.timestamp.toDate().toLocaleDateString();
  }

}
