const express = require ('express')
const bodyparser = require ('body-parser')

const app = express()

const port = 3000

 /*middleware*/
app.use(express.json())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

/*Routes*/
const viewiewroute = require ('./routes/view')

app.use('/', viewiewroute)

app.listen(port, ()=> {

console.log("Listening on port:", port)

})