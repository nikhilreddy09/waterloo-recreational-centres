const path = require('path')
const express = require('express')
const parkData = require('./parksData')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }));

const port = 3000


app.get('/', (req, res) => { 
 
    res.sendFile(`${__dirname}/home.html`)

});


app.post('/form/data' , (req,res) => {

    console.log(req.body.data)

    parkData(req.body.data , (error ,{data} = {} ) => {

        if(error){
            console.log(error)
        }
        console.log(data)
    })
    res.end()
})






app.listen(3000, () => console.info('Application running on port 3000'));