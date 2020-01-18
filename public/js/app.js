
const searchForm = document.querySelector('form')

const search = document.querySelector('input')

const datainput = document.querySelector('#datauser')
datainput.textContent = ''

console.log("js")


searchForm.addEventListener('submit' , (e) => {

    e.preventDefault()
    const name = search.value
    datainput.textContent = 'Loading............'
    fetch('/form/data?name='+name+'').then((response) => {
        response.json().then((data) =>{
            if(data.error){
                console.log('error')
                datainput.textContent = "UNABLE TO FIND THE SPECIFIED PARK."
            }
            else {
                console.log(data)
                // datainput.textContent = data.name
                datainput.textContent = "   Park Name : "+ data.name +","+
                                        "   Address : "+ data.address +","+
                                        "   Arena : " + data.arena +","+
                                        "   Ball Diamond : "+ data.ball_diamond +","+
                                        "   BasketBall Court : " +data.basketball_court+","+
                                        "   Cricket Pitch : "+ data.cricket_pitch +","+
                                        "   Gymnasium : "+data.gymnasium+","+
                                        "   Picnic Area : "+data.picnic_area+","+
                                        "   PlayGround : "+data.playground+","+
                                        "   Indoor Swimming pool : "+data.swimming_pool_indoor+","+
                                        "   Outdoor Swimming Pool : "+data.swimming_pool_outdoor+","+
                                        "   Tennis Court : "+data.tennis_court+","+
                                        "   Indoor Track : "+data.track_indoor+","+
                                        "   Outdoor Track : "+data.track_outdoor

                
        }
        })
    })
})