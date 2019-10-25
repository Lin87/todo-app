import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { TodoItem } from '../model/todo-item.model';

@Component({
  selector: 'app-new-todo-item',
  templateUrl: './new-todo-item.component.html',
  styleUrls: ['./new-todo-item.component.css']
})
export class NewTodoItemComponent implements OnInit {

  addTodoForm: FormGroup;
  newTodoItem: TodoItem;
  hasError: boolean = false;

  constructor(fb: FormBuilder) {
    this.addTodoForm = fb.group({
      'description': ['', Validators.required],
      'dueDate': 'days',
      'completed': false
    });
  }

  ngOnInit() {
  }

  onSubmit(value: any): void {

    if (this.addTodoForm.valid) {
      this.newTodoItem = new TodoItem(value.description, value.dueDate, value.completed);
      console.log(this.newTodoItem);
      this.hasError = false;
    } else {
      this.hasError = true;
    }
    
  }

}
