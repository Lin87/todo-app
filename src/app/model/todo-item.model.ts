import { Task } from '../firestore/task.model';

export class TodoItem implements Task {
    id: string = '';
    description: string;
    dueDate: string;
    completed: boolean;

    constructor(description: string, dueDate: string, completed: boolean) {
        this.description = description;
        this.dueDate = dueDate;
        this.completed = completed;
    }

}