const request = require('request')


// let parkname = argv.name
// parkname = encodeURIComponent(parkname)




const parkData = (parkname , callback) =>  {

    let url = 'https://services.arcgis.com/ZpeBVw5o1kjit7LT/arcgis/rest/services/RecreationPoints/FeatureServer/0/query?where=UPPER(NAME)%20like%20%27%25'+encodeURIComponent(parkname)+'%25%27&outFields=*&outSR=4326&f=json'

    request(url , {json : true} , (err, {body}) => {

        if(err){
            callback('unable to connect to the database')
        }
        else if(body.features.length === 0){
            callback('unable to find location')
        }
        else {
            callback(undefined , {
                data : body.features[0]
            })
        }
        // console.log(process.argv)
        //  console.log(body.features[0])
        
        })
    

} 

module.exports = parkData

