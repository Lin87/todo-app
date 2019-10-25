export interface Task {
    id?: string;
    description: string;
    dueDate: string;
    completed?: boolean;
    timestamp: any;
}