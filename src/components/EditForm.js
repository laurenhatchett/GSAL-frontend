import React, {Component} from 'react'

let baseURL = ""

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003'
} 

class EditForm extends Component {
    constructor(props){
        super(props)
        // console.log('super props',props)
        this.state = {
          profiles: props.profiles,
          imgURL: "",
            name: "",
            information:""
         };
        
    }

   // function called every keystroke 
   handleChange = (event) => {
    //grabs value (what user types in) and writes them to state
    this.setState({
      //grab all as an object-dynamically
      [event.target.id]: event.target.value
    })
    console.log('handleChange', event.target.value)
    console.log('edit this.state', this.state)
  }  
   
    // handleImgURLChange = (event) => {
    //   console.log("inside handleImgURLChange event", event)
    //   //grabs value (what user types in) and writes them to state
    //   this.setState({
       
    //     imgURL: event.target.value
    //   })

    // }

    
    // handleNameChange = (event) => {
    //   //grabs value (what user types in) and writes them to state
    //   this.setState({
        
    //     name: event.target.value
    //   })
    // }

    
    // handleInfoChange = (event) => {
    //   //grabs value (what user types in) and writes them to state
    //   this.setState({
        
    //     information: event.target.value
    //   })
    // }
    
   
    handleSubmitEdit =(profiles)=>{

      console.log("inside handleSubmitEdit")
      
      // console.log(this.state.imgURL)
      // console.log(this.state.name)
      // console.log(this.state.information)
      fetch(baseURL + '/profiles/' + this.state.profiles._id, {
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
        console.log(resJson)

        const findIndex = this.state.profiles.findIndex(profiles => profiles._id)
        console.log(findIndex)
        const copyProfiles = [...this.state.profiles]
        this.setState({profiles: copyProfiles})
        
        })
        .catch((err) => {console.log(err)})
      }
        
    
  
    render () {
      return (
        <>
        <h1>EDIT PROFILE</h1>
        <div className='edit-container'>
  <form onSubmit={ ()=> this.handleSubmitEdit(this.state.profiles)} className="new-profile-form">
                  <input 
                    
                      id="imgURL"
                      type="text"
                      onChange={this.handleChange}
                      value={this.state.imgURL}
                      placeholder="image URL"
                      className="profile-input"
                  />
                  <input 
                      
                      id="name"
                      type="text"
                      onChange={this.handleChange}
                      value={this.state.name}
                      placeholder="name"
                      className="profile-input"
                  />
                  <input 
                      id="information"
                      type="text"
                      onChange={this.handleChange}
                      value={this.state.information}
                      placeholder="information"
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
  }

export default EditForm