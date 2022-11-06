import React, {Component} from 'react'

// import { Route, Routes, Link } from "react-router-dom";


class Profiles extends Component {
   constructor(props) {
    super(props);
    this.state = {
     profiles: []
    };
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <h1 className="profiles-title">Profiles</h1>
        <div  className="all profiles">
        {this.props.profiles.map((profile, index) => {
          return (
              <div className="profile-container" key={index}>

                        <h3 className="profile-name">{profile.name}</h3>
                      {/* <Link to={'/detail/'+ profile._id}> */}
                        <img src={profile.imgURL} />
                      {/* </Link> */}
                      
                    
              </div>
          );
        })}
        </div>



      </div>
    );
  }
}
          
export default Profiles