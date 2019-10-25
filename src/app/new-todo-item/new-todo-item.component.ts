import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { TaskService } from '../firestore/task.service';
import { Task } from '../firestore/task.model';

@Component({
  selector: 'app-new-todo-item',
  templateUrl: './new-todo-item.component.html',
  styleUrls: ['./new-todo-item.component.css']
})
export class NewTodoItemComponent implements OnInit {

  addTodoForm: FormGroup;
  newTodoTask: Task;
  hasError: boolean = false;

  constructor(fb: FormBuilder, private taskService: TaskService) {
    this.addTodoForm = fb.group({
      'description': ['', Validators.required],
      'dueDate': 'days'
    });
  }

  ngOnInit() {
  }

  onSubmit(value: any): void {

    if (this.addTodoForm.valid) {

      this.newTodoTask = {
        description: value.description,
        dueDate: value.dueDate,
        timestamp: new Date()
      }

      this.taskService.addTask(this.newTodoTask);
      this.hasError = false;

      this.addTodoForm.reset({'dueDate': 'days'});

    } else {
      this.hasError = true;
    }
    
  }

}
