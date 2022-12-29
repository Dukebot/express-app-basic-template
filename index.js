const App = require('./src/app')
const Config = require('./src/config')

const app = new App(function (app) {
    app.get('/', function (req, res) {
        res.send("Hello World!")
    })
    
    // ...
})

app.run(Config.port)