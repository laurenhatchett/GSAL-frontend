import React, {Component} from 'react'
import "./index.css"
import {Route, Routes } from "react-router-dom"
import Home from "./routes/Home"
import AdminProfiles from "./routes/AdminProfiles"
import Footer from "./components/Footer"
import NewForm from "./components/NewForm"
import AboutUs from './routes/AboutUs'
import PublicProfiles from "./routes/PublicProfiles"
import ViewSingleProfile from "./components/ViewSingleProfile"

let baseURL = ""

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003'
} 

class App extends Component {

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
          // console.log("data", data);
          //setState to be that data
          this.setState({ profiles: data.profiles });
        });
      }

      handleAddProfile = (profiles) => {
        console.log("profiles inside handleAddProfile", profiles)
         //copy the entire profiles array to a new array
         const copyProfiles = [...this.state.profiles];
         copyProfiles.unshift(profiles);
         this.setState({profiles: copyProfiles});
       };

      
      render () {



  return (
    <div className="App">
        <>
      <Routes>
       <Route exact path="/" element={<Home/>}/>
       <Route path="/about" element={<AboutUs/>}/> 
       <Route path="/admin-profiles" element={<AdminProfiles profiles={this.state.profiles}/>}/>
       <Route path="/create" element={<NewForm handleAddProfile={this.handleAddProfile}/>}/>
       <Route path="/public-profiles" element={<PublicProfiles profiles={this.state.profiles}/>}/>
       <Route path="/profiles/:id" element={<ViewSingleProfile  profiles={this.state.profiles}   />}/>

       {/* <Route path="/view-profiles" element={<Profiles handleDeleteProfile={this.handleDeleteProfile}/>}/> */}
      {/* <Route path="/view-profiles" element={<Profiles/>}/> */}
      {/* <Route path="/edit" element={<EditForm handleProfile={this.state.profiles}/>}/> */}

       {/* <Route path="/update/:id" element={<UpdateForm profiles={this.state.profiles}/>}/> */}

      </Routes>
      <Footer/>
     </>
    </div>
  );
}
}
export default App
