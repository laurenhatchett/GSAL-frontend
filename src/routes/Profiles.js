
import React, {Component} from 'react'
import "./ProfilesStyles.css"
// import {Link} from "react-router-dom"
import {AiOutlineDelete} from "react-icons/ai"
// import {FiEdit} from "react-icons/fi"
let baseURL = ""

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003'
} 

class Profiles extends Component {
   constructor(props) {
    super(props);
    this.state = {
     profiles: props.profiles
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
     
      <div className="all-profiles">
        <h1 className="profiles-title">Profiles</h1>
        <div  className="all profiles">
        {this.props.profiles.map((profile, index) => {
          return (
              <div className="card" key={index}>

                        <h3 className="profile-name">{profile.name}</h3>
                        <img className="profile-img" src={profile.imgURL} alt="profile" />
                      {/* <Link to={'/detail/'+ profile._id}> */}
                      {/* </Link> */}
                      <div className="btn-container">
                      <div className="delete-btn">
                      <AiOutlineDelete  size={35} style={{color:"#222"}} onClick={() => this.handleDelete(profile)} />
                      </div>
                      <div>
                      
                      </div>
                      {/* <div className="edit-btn">
                      <Link to ={ "/edit/id" + profile.id}>Edit</Link>
                      </div> */}
                      {/* <div className="view-btn">
                      <button onClick={() => this.handleView(profile)} className='btn'>VIEW BIO</button>
                      </div> */}
                      </div>

                    
              </div>
    
          );
        })}
        </div>



      </div>
    );
  }
}

export default Profiles
