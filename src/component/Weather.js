import React, {useState} from 'react';

const Weather= () => {
   const [weather, setweather] = useState('')

const headleClick = () =>{
     fetch("https://api.openweathermap.org/data/2.5/forecast?q=seoul&appid=9885491d7976204b3d5d38c8197ed10a")
        .then(res => {
            return res.json()
        }) 
        .then(data => {
           console.log(data)
           setweather(weather)
        });

}    
headleClick()
return <p>weather</p>

    
}
export default Weather;