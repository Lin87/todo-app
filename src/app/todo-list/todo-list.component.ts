import { Component, OnInit } from '@angular/core';

import { config } from '../firestore/firestore.config';
import { AngularFirestore } from '@angular/fire/firestore';
import { TaskService } from '../firestore/task.service';
import { Task } from '../firestore/task.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {

  tasks: Observable<any[]>;

  constructor(private db: AngularFirestore, private taskService: TaskService) {

  }

  ngOnInit() {

    let tasksCollectionRef = this.db.collection<Task>(config.collection_endpoint, ref => ref.orderBy('timestamp', 'asc'));
    this.tasks = tasksCollectionRef.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
        //Get document data
        const data = a.payload.doc.data() as Task;
        //Get document id
        const id = a.payload.doc.id;
        //Use spread operator to add the id to the document data
        return { id, ...data };
        });
      })
    );

  }

}
