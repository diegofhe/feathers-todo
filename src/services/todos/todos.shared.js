export const todoPath = 'todos'

export const todoMethods = ['find', 'get', 'create', 'patch', 'remove','update']

export const todoClient = (client) => {
  const connection = client.get('connection')

  client.use(todoPath, connection.service(todoPath), {
    methods: todoMethods
  })
}
