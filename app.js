const request = require('request')
const argv = require('yargs').argv


let parkname = argv.name
parkname = encodeURIComponent(parkname)

let url = 'https://services.arcgis.com/ZpeBVw5o1kjit7LT/arcgis/rest/services/RecreationPoints/FeatureServer/0/query?where=UPPER(NAME)%20like%20%27%25'+parkname+'%25%27&outFields=*&outSR=4326&f=json'

request(url , {json : true} , (err, res, body) => {

    if(err){
        console.log(err)
    }
    console.log(process.argv)
     console.log(body.features[0])
    
    })


