/* eslint-disable */

db.createCollection("todos")

db.todos.insert({ completed: false, title: "Learn NodeJS", description: "Spend a few days learning NodeJS" })
db.todos.insert({ completed: false, title: "Learn Redux", description: "Spend a few days learning Redux" })
db.todos.insert({ completed: false, title: "First full stack JS app", description: "Create your first fullstack application with just JS" })
db.todos.insert({ completed: false, title: "It's friday", description: "Go have a beer" })