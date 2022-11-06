
import React, {Component} from 'react'
import "./ProfilesStyles.css"

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
      <div className="all-profiles">
        <h1 className="profiles-title">Profiles</h1>
        <div  className="all profiles">
        {this.props.profiles.map((profile, index) => {
          return (
              <div className="card" key={index}>

                        <h3 className="profile-name">{profile.name}</h3>
                      {/* <Link to={'/detail/'+ profile._id}> */}
                        <img className="profile-img" src={profile.imgURL} alt="profile" />
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
