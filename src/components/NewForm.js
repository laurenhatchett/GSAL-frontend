import React, {Component} from 'react'

// import "./newFormStyles.css"

let baseURL = ""

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003'
}
//  else{
//   baseURL = process.env.REACT_APP_BACKEND_URL
// }
class NewForm extends Component {
    constructor(props){
        super(props)
        // console.log('super props',props)
        this.state ={
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
  
      fetch(baseURL + '/profiles', {
        method: 'POST',
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
        //set state using resJson
          console.log('NewForm - resJson', resJson)
         this.props.handleAddProfile(resJson)
         this.setState({
          imgURL: "",
          name: "",
          information:"" 
          
        })
        (window.location="/admin-profiles")
       
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
                  <textarea 
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

export default NewForm