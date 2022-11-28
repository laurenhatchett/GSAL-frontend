import "./PublicProfilesStyles.css"
// import {Link} from "react-router-dom"
import React, {Component} from 'react'
import "./PublicProfilesStyles.css"
import {Link} from "react-router-dom"
import Nav1 from "../components/Navbar1"


class PublicProfiles extends Component {
   constructor(props) {
    super(props);
    this.state = {
    profiles: []
    };
   }
  
  render() {
    return (
     <>
     <Nav1/>
      <div className="profiles-container">
        <h1 className="profiles-title">Profiles</h1>
        <div  className="all-profiles">
        {this.props.profiles.map((profile, index) => {
          return (
              <div className="card" key={index}>
                      <h3 className="profile-name">{profile.name}</h3>
                      <img className="profile-img" src={profile.imgURL} alt="profile" />
                      {/* <h3 className="profile-info">{profile.information}</h3> */}

                      <div className="btn-container">
                      <div className="view-btn">
                      {/* <Link to ={ "/profiles/" + profile._id}>VIEW</Link> */}
                       <Link to ={ "/profiles/" + profile._id}>VIEW</Link>

                      </div> 
                      </div>
                      
                      
              </div>
                      
                        

                 
              

    
          );
        })}
        </div>



      </div>
      </>
    );
  }
}

export default PublicProfiles
