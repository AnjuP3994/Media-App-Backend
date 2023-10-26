//1. import json-server
const jsonserver = require('json-server')

//2. create a server
const server = jsonserver.create()

//3. setup path for db.json
const router = jsonserver.router('db.json')

//4. return a middleware used by jsonserver. 
const middleware = jsonserver.defaults()

//5. setup port
const port = process.env.PORT || 3001

//6. use the server
server.use(middleware)
server.use(router)

//7. to run the server
server.listen(port,()=>{
    console.log('listening on port '+port);
})
