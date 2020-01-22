
const searchForm = document.querySelector('form')

const search = document.querySelector('input')

const datainput = document.querySelector('#datauser')

const row1 = document.querySelector('#row1')
const row2 = document.querySelector('#row2')
const row3 = document.querySelector('#row3')
const row4 = document.querySelector('#row4')
const row5 = document.querySelector('#row5')
const row6 = document.querySelector('#row6')
const row7 = document.querySelector('#row7')
const row8 = document.querySelector('#row8')
const row9 = document.querySelector('#row9')
const row10 = document.querySelector('#row10')
const row11 = document.querySelector('#row11')
const row12 = document.querySelector('#row12')
const table_display = document.querySelector('.table-modify') 
const databefore = document.querySelector('#beforetable')

datainput.textContent = ''

console.log("js")


searchForm.addEventListener('submit' , (e) => {

    e.preventDefault()
    const name = search.value
     databefore.textContent = 'Loading............'
    fetch('/form/data?name='+name+'').then((response) => {
        response.json().then((data) =>{
            if(data.error){
                console.log('error')
                databefore.textContent = "UNABLE TO FIND THE SPECIFIED PARK."
                table_display.style.display = "none"
            }
            else {
                console.log(data)
                databefore.textContent = "below table provides Information about the specified park"
                table_display.style.display = "block";
                // datainput.textContent = data.name
                // datainput.textContent = "   Park Name : "+ data.name +","+
                //                         "   Address : "+ data.address +","+
                //                         "   Arena : " + data.arena +","+
                //                         "   Ball Diamond : "+ data.ball_diamond +","+
                //                         "   BasketBall Court : " +data.basketball_court+","+
                //                         "   Cricket Pitch : "+ data.cricket_pitch +","+
                //                         "   Gymnasium : "+data.gymnasium+","+
                //                         "   Picnic Area : "+data.picnic_area+","+
                //                         "   PlayGround : "+data.playground+","+
                //                         "   Indoor Swimming pool : "+data.swimming_pool_indoor+","+
                //                         "   Outdoor Swimming Pool : "+data.swimming_pool_outdoor+","+
                //                         "   Tennis Court : "+data.tennis_court+","+
                //                         "   Indoor Track : "+data.track_indoor+","+
                //                         "   Outdoor Track : "+data.track_outdoor
                
                row1.textContent = data.arena
                row2.textContent = data.ball_diamond
                row3.textContent = data.basketball_court
                row4.textContent = data.cricket_pitch
                row5.textContent = data.gymnasium
                row6.textContent = data.picnic_area
                row7.textContent = data.playground
                row8.textContent = data.swimming_pool_indoor
                row9.textContent = data.swimming_pool_outdoor
                row10.textContent = data.tennis_court
                row11.textContent = data.track_indoor
                row12.textContent = data.track_outdoor
        }
        })
    })
})