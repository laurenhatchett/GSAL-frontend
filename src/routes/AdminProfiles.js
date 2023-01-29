
import React, {Component} from 'react'
import "./AdminProfilesStyles.css"
// import {Link} from "react-router-dom"
import {AiOutlineDelete} from "react-icons/ai"
import {BiEdit} from "react-icons/bi"
import {MdPersonAddAlt} from "react-icons/md"
import Nav1 from "../components/Navbar1"

// let baseURL = ""
// if (process.env.NODE_ENV === 'development') {
//   console.log("process.env.NODE_ENV", process.env.NODE_ENV)
//   baseURL = 'http://localhost:3003'
// } 
// else{
//   baseURL = process.env.REACT_APP_BACKEND_URL
// }

let  baseURL = process.env.REACT_APP_BACKEND_URL

class AdminProfiles extends Component {
   constructor(props) {
    super(props);
    this.state = {
     profiles: props.profiles,
     imgURL: "",
     name: "",
    information:"",
    };
   }
  
  handleDelete = (profiles) => {
    console.log('inside handleDelete', profiles)
    fetch(baseURL + '/profiles/' + profiles._id, {
      method: 'DELETE'
    }).then( response => {
      const findIndex = this.state.profiles.findIndex(profiles => profiles._id)
      const copyProfiles = [...this.state.profiles]
      copyProfiles.splice(findIndex, 1)
      this.setState({profiles: copyProfiles})
      window.location.reload()
    })
    console.log("profile deleted", profiles)
  }

  
  render() {
    return (
      <>
      <Nav1/>
      <div className='admin-profiles-container'>
        <h1 className="admin-profiles-title">Admin Profiles</h1>
      <div className="create-icon-container">
      <MdPersonAddAlt className="create-icon"size={50} style={{color:"#222"}} onClick={() => window.location="/create"}/>
      </div>
        <div className='profiles-container'>
        <div  className="admin-all-profiles">
        {this.props.profiles.map((profile, index) => {
          return (
              <div className="admin-card" key={index}>
                      <div className="edit-icon-container">
                      <BiEdit className="edit-icon"size={35} style={{color:"#222"}} onClick={ () => window.location="/profiles/" + profile._id + "/edit"}/>
                      </div>
                      <h3 className="admin-profile-name">{profile.name}</h3>
                      <img className="admin-profile-img" src={profile.imgURL} alt="profile" />
                      <div className="admin-info-container">
                      <h3 className="admin-profile-info">{profile.information}</h3>
                      </div>
                      <div className="delete-btn-container">
                      <div className="delete-btn">
                      <AiOutlineDelete  size={35} style={{color:"#222"}} onClick={() => this.handleDelete(profile)} />
                      </div>
                      </div>
                      
                  
                 
              </div>
              

    
          );
        })}
        </div>

        </div>

      
      </div>
      </>
    );
  }
}

export default AdminProfiles
