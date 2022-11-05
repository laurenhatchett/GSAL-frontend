import React, {Component} from 'react'
let baseURL = ''

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003'
} 
// else {
//   baseURL = 'https://.herokuapp.com'
// }


class ProfilesData extends Component {
  constructor(props) {
    super(props)
      this.state = {
        profiles: []
      }
    }
      //lifecycle - only run once when the component is mounted for the first time
componentDidMount(){
  this.getProfiles()
 }
    getProfiles = () =>{
      fetch(baseURL + '/profiles')
        //if fetch works
        .then((res) => {
          //if response is successful return json
          if (res.status === 200) {
            return res.json();
            //else it was not successful
          } else {
            return [];
          }
        })
        .then((data) => {
          console.log("data", data);
          //setState to be that data
          this.setState({ profile: data.profiles });
        });
      }
      render () {
        
            return (
              <div className="App">
                 
                
            
              </div>
            );
          }
          }
          
export default ProfilesData