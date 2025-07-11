const app = require('./src/app')
const PORT = process.env.PORT || 3005

app.listen(PORT, ()  => {
    console.log(`Pedido service running on http://localhost:${PORT}`)
})