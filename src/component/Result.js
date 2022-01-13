import React, {useState} from 'react';
import index from "./index.css";

const Result= (props) => {
   const {user} = props;
   console.log(user.name)
    const {repos} = props;

   
    const list = repos.slice(0,1).map((item, index) =>{

        return (
        <div id='result'>
            <div className='card1'>
                <div className='item'>
                    <p><img key={index} id='imggithub' src={item.owner.avatar_url}/></p>  
                    <p><span>Name</span> : {user.name}</p>
            
                    <p><span>Occupation</span>: {user.bio}</p>
           
                    <p><span>Country</span>: {user.location}</p>
                </div>

            </div>

            <div className='card1'>
                <div  className='item'>
                    <i class="far fa-user"><p><span>Followers</span> : {user.followers}</p></i>
                </div>
                <div  className='item'>
                    <p><span>Following</span>: {user.following}</p>
                </div>
                <div  className='item'>
                    <p><span>Number of Repos</span>: {repos.length}</p>
                </div>
            </div>

            <div className='card1'>
                <div  className='item'>
                    <p>URL : <a href={item.owner.html_url}>Github Repository Lik</a></p>
                </div>

                <div  className='item'>
                    <p><span>User Name</span> : {item.owner.login}</p>
                </div>
                
                <div  className='item'>
                    <p><span>URL</span> : {item.name}</p>
                </div>
                
            </div>  
       
           
        </div>

      

        )
    })
          
    
        
    return list
        // <div id='result'>
           
        //     <img id='imggithub' src={repos.owner.avatar_url}/>
        //     <p>User Name : {repos.owner.login}</p>
        //     <p>URL : <a href={repos.owner.html_url}>Github Repository Lik</a></p>

        // </div>
    

    
}
export default Result;