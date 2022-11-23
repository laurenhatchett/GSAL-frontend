import React, {useState, useEffect} from 'react';
import "./ViewSingleProfileStyles.css"
import { useParams } from 'react-router-dom'
import Nav1 from "../components/Navbar1"
let baseURL = ""

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003'
} 
else{
  baseURL = process.env.REACT_APP_BACKEND_URL
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
      },[])

    return (
        
           <> 

<Nav1/>   
    <div className="view-container-parent">
    <div className="view-container-child">
      <h3 className="view-profile-name">{bio.name}</h3>
      <img className="view-profile-img" src={bio.imgURL} alt="profile" />
      <div className="info-container">
        <h3 className="view-profile-info">{bio.information}</h3>
      </div>
    </div>
    </div>
    </> 
  )
}

export default ViewSingleProfile
