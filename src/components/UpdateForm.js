import React, {Component} from 'react'


let baseURL = ""

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003'
} else{
  baseURL = process.env.REACT_APP_BACKEND_URL
}
class UpdateForm extends Component {
  constructor(props){
    super(props)
    // console.log('super props',props)
    this.state ={
      profiles: props.profiles,
      //the way the element is being returned in the data 
        imgURL: "",
        name: "",
        information:""
    }
}

// function called every keystroke 
handleChange = (event) => {
  //grabs value (what user types in) and writes them to state
  this.setState({
    //grab all as an object-dynamically
    [event.target.id]: event.target.value
  })
  console.log('handleChange', event.target.value)
}
//called when user submits the form - post and update state 
//event so we can call event.preventDefault()
handleSubmit = (event) => {
  // prevent refresh default- so fetch will run 
  event.preventDefault()
  //make fetch to post to the backend 
  // console.log("create what is event", event)

  fetch(baseURL + '/profiles' + this.state.profiles._id, {
    method: 'PUT',
    // body to send data as a string - take data given(this.state.name) and wrap in double quotes to turn it into a json object-AF
    body: JSON.stringify({
      imgURL: this.state.imgURL,
      name:this.state.name,
      information: this.state.information
    }),
    // tell server we're sending application/json data
    headers: {
      'Content-Type': 'application/json'
    }
    // if above works - backend server creates new element and sends us new element 
    //parse received string data back to res.json so we can use it
  }).then(res => res.json())
  //now that we have res.Json
  .then(resJson => {
    const copyProfiles =[...this.props.profiles]
    const findIndex = this.props.profiles.findIndex(
      (profiles) => this.props.profiles._id === resJson._id)
    copyProfiles[findIndex].imgURL = resJson.imgURL
    copyProfiles[findIndex].name = resJson.name
    copyProfiles[findIndex].information = resJson.information
    
    })
    .catch((err) => {console.log(err)})
  }

render () {
  return (
    <>
    <h1>CREATE A NEW PROFILE</h1>
    <div className='create-container'>
<form onSubmit={this.handleSubmit} className="new-profile-form">
              <input 
                  id="imgURL"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.imgURL}
                  placeholder="image URL"
                  className="new-profile-input"
              />
              <input 
                  id="name"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.name}
                  placeholder="name"
                  className="new-profile-input"
              />
              <input 
                  id="information"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.information}
                  placeholder="information"
                  className="new-profile-input"
              />
              <input type="submit" value="SUBMIT" className='create-submit-btn' />

          </form>
  </div>
    </>
    )
}
}

export default UpdateForm
