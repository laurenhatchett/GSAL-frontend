
import React, {Component} from 'react'
import "./ProfilesStyles.css"

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
    console.log("this.state", props.profiles)
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
                      <button onClick={() => this.handleDelete(profile)} className='btn'>DELETE</button>

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
