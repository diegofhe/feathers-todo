import { user } from './users/users.js'

import { todo } from './todos/todos.js'

export const services = (app) => {
  app.configure(user)

  app.configure(todo)

  // All services will be registered here
}
