import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../firestore/task.model';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faSquare, faCheckSquare } from '@fortawesome/free-regular-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { TaskService } from '../firestore/task.service';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {

  @Input() todo: Task;

  formattedTimestamp: string;
  
  constructor( private faLibrary: FaIconLibrary, private taskServcice: TaskService ) {
    faLibrary.addIcons(faTrash, faSquare, faCheckSquare);
  }

  ngOnInit() {
    this.formattedTimestamp = this.todo.timestamp.toDate().toLocaleDateString();
  }

  changeDueDate(priority: string):void {
    this.taskServcice.updateTask(this.todo.id, {dueDate: priority});
  }

  deleteTodo():void {
    this.taskServcice.deleteTask(this.todo.id);
  }

  setCompleted():void {
    this.taskServcice.updateTask(this.todo.id, {completed: !this.todo.completed});
  }

}
