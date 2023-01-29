import { useParams } from 'react-router-dom'
import React, {useState, useEffect} from 'react';
import "./EditFormStyles.css"


let  baseURL = process.env.REACT_APP_BACKEND_URL
const EditForm = (props) => {

    let {id} = useParams()
    const [name, setName] = useState('')
    const [imgURL, setImgURL] = useState('')
    const [information, setInformation] = useState('')
  console.log("id inside EditForm",id)
  console.log("props",props)
  
 const   handleSubmitEdit =(id)=>{

        console.log("inside handleSubmitEdit", id)
     
        fetch(baseURL + '/profiles/' + id, {
      method: 'PUT',
      // body to send data as a string - take data given(this.state.name) and wrap in double quotes to turn it into a json object-AF
        body: JSON.stringify({
        
        imgURL: imgURL,
        name:name,
        information:information
        
         }),
      // tell server we're sending application/json data
        headers: {
        'Content-Type': 'application/json'
        }
      // if above works - backend server creates new element and sends us new element 
      //parse received string data back to res.json so we can use it
        }).then(res =>  console.log("check 46", res.json()))
        
      .catch((err) => {console.log(err)})
    }

const getProfile =(id)=>{

    console.log("inside handleSubmitEdit", id)
 
    fetch(baseURL + '/profiles/' + id, {
  method: 'GET',
  
  // tell server we're sending application/json data
    headers: {
    'Content-Type': 'application/json'
    }
  // if above works - backend server creates new element and sends us new element 
  //parse received string data back to res.json so we can use it
    }).then(res => res.json())
    .then((res) => {
        
        console.log("res", res)
        setName(res.name)
        setImgURL(res.imgURL)
        setInformation(res.information)
        
        // console.log(name)
        // console.log(imgURL)
        // console.log(information)
    })
  }


    useEffect(()=>{
   getProfile(id)
         },[])
        
  return (
    <>
    <div>
      <h1>Edit Form</h1>
    </div>
     <div className='edit-container'>
                        <form onSubmit={()=> handleSubmitEdit(id)} className="new-profile-form">
                            <input 
                      
                            id="name"
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            
                            className="profile-input"
                            />
                            <input 
                    
                              id="imgURL"
                              type="text"
                              onChange={(e) => setImgURL(e.target.value)}
                              value={imgURL}
                              className="profile-input"
                              />
                          <textarea
                           id="information"
                          type="text"
                          onChange={(e) => setInformation(e.target.value)}
                          value={information}
                          className="profile-input"
                           />
                          <input
                          type="submit"
                          value="SUBMIT"
                          className='form-submit-btn' />
  
                      </form>
                  </div>
     </>
  )
}

export default EditForm








       
