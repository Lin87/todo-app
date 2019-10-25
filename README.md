# Homework #4: Todo App 
Ethan Lin  
CSC436 Web Applications - Autumn 2019  
https://github.com/Lin87/todo-app

## Instruction
`http-server dist/todo-app`

## Dev Notes
* For the extra credit 1, I followed the instructions on the [medium.com post](https://medium.com/@coderonfleek/firebase-firestore-and-angular-todo-list-application-d0fe760f6bca). There is no video on that page. The instructions are a bit outdated because some of the Firebase UIs have changed. Also, rather than creating a separate app for this extra credit. I combined it with the todo app.
* Instead of creating a todo list items in an array in the "todo service", the todo items (or tasks) are save to (and retreived from) a Firestore database.
* In the source files, I created a directory called `firestore`. This directory contains the configuration (not API secrets) to a Cloud Firestore database (`firestore.config.ts`), a model for the todo item or task (`task.model.ts`), and a service (`task.service.ts`) to add, update, and delete tasks.
* The Firestore database is pre-popluated with 3 todos/tasks.
* For the routing, I have set the base URL (e.g., localhost:4200) to redirect to the dashboard component (e.g., localhost:4200/dashboard).
* There is a route and component for page not found.
* New todo item is added to the bottom of the todo list. In the Firestore database, I have set a `timestamp` field. The list is ordered by the timestamp in ascending order.
* The due date buttons are a button group. The blue background color is to indicate the button is active (or "to indicate how timely the task needs to be completed").
* For extra credit 2, I added a red button with a trash icon to delete the todo item from the list (and also from the database).
* I used Twitter Bootstrap library and Font Awesome icons in this todo app.
* When the due date is urgent, I have set the text color of the todo item to red. _This is not part of the homework._
* I also added button to toggle the todo item as completed or incompleted. The text will also get "lined-through" when it is marked completed. There is a `completed` field in the Firestore database to hold this state. _This is also not part of the homework._
