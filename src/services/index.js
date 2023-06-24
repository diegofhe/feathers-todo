import { todo } from './todos/todos.js'

export const services = (app) => {
  app.configure(todo)

  // All services will be registered here
}
