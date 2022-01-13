import React, {useState} from 'react';
import Result from './Result';
import Button from './Button';
import index from "./index.css";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('');
  const [repos, setDataInput] = useState();
  const [user, setuser] = useState();
  const [bg, setBg] = useState([20,34,44,68]);



  const handleChange = (e) =>{
    setSearchInput(e.target.value)
    // console.log(setSearchInput(e.target.value))
  }

 const handleClick = () =>{
  // https://api.github.com/repos/{owner}/{repo}
    fetch(`https://api.github.com/users/${searchInput}/repos`)
    .then(res =>{
      return res.json()
    })
    .then(data =>{
      console.log(data)
      setDataInput(data)
    })

    fetch(`https://api.github.com/users/${searchInput}`)
    .then(respo =>{
      return respo.json()
    })
    .then(data =>{
      // console.log(data.name)
      setuser(data)
     
    })
 }

//get in array
 const chooseColor = () =>{
    const random = [];
    for(let i = 0; i < 3; i++){
      random.push(Math.floor(Math.random()*256));
    }
    return random;
 }
//put in color in to string
const formatColor = (arr) =>{
  return "rgb(" + arr.join(',') + ")";

}

//apply the color background
 const applyColor = () =>{
   const color = formatColor(bg);
   document.body.style.backgroundColor=color;

}
 //get corandom colors n update the state
const handleClicks = () =>{
  setBg(chooseColor());
  applyColor();
  
}
  

    return (
      <div id='main'>
        <div id="search">
          <h1>Search Github for User Information</h1>
          <input type='text' placeholder='Search' id='search' value={searchInput} onChange={handleChange} ></input>
          <button onClick={handleClick} >Search</button>
          <Button onClick={handleClicks} />
        </div> 
      
        {repos && <Result repos={repos} user={user}/>}
        
      </div>
      
    )
    
}
export default SearchBar;