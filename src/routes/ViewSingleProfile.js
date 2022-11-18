import React, {useState, useEffect} from 'react';
import "./ViewSingleProfileStyles.css"
import { useParams } from 'react-router-dom'
let baseURL = ""

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003'
} 

const ViewSingleProfile =(props) =>{
  let [bio, setProfile] = useState({})
  let {id} = useParams()
  console.log("id inside ViewSingleProfile",id)

  const getOneProfileById = (id) => {
   console.log('id inside getSingleProfile', id)
    fetch(baseURL + '/profiles/' + id)
    
      .then((res) => {
              //if response is successful return json
         if (res.status === 200) {
          return res.json();
                //else it was not successful
          } else {
            return [];
          }
          }).then((data) => {
              console.log("data", data);
              //setState to be that data
            setProfile(data)
            console.log(data)
          })
          }
          
     useEffect(()=>{
     getOneProfileById(id)
     console.log(bio)
      },[])

    return (
        
           <>    

    <div>
      <h3 className="profile-name">{bio.name}</h3>
      <img className="profile-img" src={bio.imgURL} alt="profile" />
      <h3 className="profile-info">{bio.information}</h3>
    </div>
    </> 
  )
}

export default ViewSingleProfile
