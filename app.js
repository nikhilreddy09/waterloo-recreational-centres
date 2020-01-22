const path = require('path')
const express = require('express')
const parkData = require('./parksData')
const bodyParser = require('body-parser')

console.log(__dirname)
const app = express()

app.use(bodyParser.urlencoded({ extended: false }));


app.use("/public", express.static(__dirname + '/public'));


// app.use(express.static(path.join(__dirname,'/public')))


const port = 3000

//default page when website loads.
app.get('/', (req, res) => { 
 
    res.sendFile(`${__dirname}/home.html`)

});


// action to be performed when form is submitted.
app.get('/form/data' , (req,res) => {

    // console.log(req.body.data)

    parkData(req.query.name , (error ,{data} = {} ) => {

        if(error){
            console.log(error)
           return  res.send({
                error : 'Unable to find the location'
            })
        }
        // console.log(data)
      return  res.send({
            name : data.attributes.NAME,
            address : data.attributes.ADDRESS,
            arena : data.attributes.ARENA,
            ball_diamond : data.attributes.BALL_DIAMOND,
            basketball_court : data.attributes.BASKETBALL_COURT,
            cricket_pitch : data.attributes.CRICKET_PITCH,
            gymnasium : data.attributes.GYMNASIUM,
            picnic_area : data.attributes.PICNIC_AREA,
            playground : data.attributes.PLAYGROUND,
            swimming_pool_indoor : data.attributes.SWIMMING_POOL_INDOOR,
            swimming_pool_outdoor : data.attributes.SWIMMING_POOL_OUTDOOR,
            tennis_court : data.attributes.TENNIS_COURT,
            track_indoor : data.attributes.TRACK_INDOOR,
            track_outdoor : data.attributes.TRACK_OUTDOOR
            
        })
    })
})


app.listen(port, () => console.info('Application running on port 3000'));