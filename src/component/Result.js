import React, {useState} from 'react';
import index from "./index.css";

const Result= (props) => {
   const {user} = props;
    const {repos} = props;
    console.log(repos)

    const list = repos.slice(0,1).map((item,index) =>{
      console.log(index)
        return (
        <div id='result' key={user.id}>
            
            <div className='card1'>
                <div className='item'>
                    <p><img key={user.id} id='imggithub' src={item.owner.avatar_url}/></p>  
                    <p><span>Name</span> : {user.name}</p>
            
                    <p><span>Occupation</span>: {user.bio}</p>
           
                    <p><span>Country</span>: {user.location}</p>
                </div>

            </div>

            <div className='card1'>
                <div  className='item'>
                    <p><i className="far fa-user"></i> <span>Followers</span>: <span id='circle'>{user.followers}</span></p>
                </div>
                <div  className='item'>
                    <p><i className="far fa-user"></i> <span>Following</span>: <span id='circle'>{user.following}</span></p>
                </div>
                <div  className='item'>
                    <p><span>Number of Repos</span>: <span id='circle'> {repos.length}</span></p>
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
       
    
}
export default Result;