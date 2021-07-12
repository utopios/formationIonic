const express = require('express')

const app = express()
const cors = require('cors')
const persons = [{firstName : 'tata', lastName:'toto', email:'toto@tata'}]
const jsonParser = require('body-parser')
app.use(cors({
    origin : "*"
}))
app.use(jsonParser.json())
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

app.get('/person/:id',(req, res)=> {
    setTimeout(()=>{
        res.json(persons[req.params.id])
    },2000)
})

app.post('/person',(req, res)=> {
    persons.push({...req.body})
    setTimeout(()=>{
        res.json({message:'Personne ajoutée', error:false})
    },2000)
})

app.listen('3000', ()=> {
    console.log("API IS OK")
})