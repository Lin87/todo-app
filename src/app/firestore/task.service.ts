import { Injectable } from '@angular/core';
import { config } from './firestore.config';
import { Task } from './task.model';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: AngularFirestoreCollection<Task>;
  private taskDoc: AngularFirestoreDocument<Task>;

  constructor( private db: AngularFirestore) {
    this.tasks = db.collection<Task>(config.collection_endpoint);
  }
  
  addTask(task:Task) {
    this.tasks.add(task);
  }

  updateTask(id, update) {
    this.taskDoc = this.db.doc<Task>(`${config.collection_endpoint}/${id}`);
    this.taskDoc.update(update);
  }

  deleteTask(id) {
    this.taskDoc = this.db.doc<Task>(`${config.collection_endpoint}/${id}`);
    this.taskDoc.delete();
  }

}
