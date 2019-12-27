const Koa = require('koa')
const app = new Koa()
const port = 3001
const WebSocket = require('ws').Server
const server = require('http').createServer(app.callback())

const wss = new WebSocket({// 同一个端口监听不同的服务
  server
})

wss.on('connection', function (ws) {
  ws.on('message', function(data) {
    // ws.emit('chat_message', data)
    wss.clients.forEach((client) => {
      // if (client !== ws) {
        console.log(data, client.readyState)
        client.send(data)
      // }
    })
  })
})
app.use(async ctx=> {
  console.log(ctx.url)
  ctx.body = 'hello web'
})
server.listen(port, function() {
  console.log('listening on port:', port)
})