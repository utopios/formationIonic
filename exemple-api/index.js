const express = require('express')

const app = express()
const cors = require('cors')
const persons = [{firstName : 'tata', lastName:'toto', email:'toto@tata'}]

app.use(cors({
    origin : "*"
}))
app.get('/', (req, res) => {
    console.log("ok")
    setTimeout(()=>{
        res.json({message : 'message from api'})
    },3000)
})

app.get('/demo/:name', (req, res)=> {
    setTimeout(()=>{
        res.json({name : req.params.name})
    },3000)
})

app.get('/persons',(req, res)=> {
    setTimeout(()=>{
        res.json(persons)
    },2000)
})


app.listen('3000', ()=> {
    console.log("API IS OK")
})