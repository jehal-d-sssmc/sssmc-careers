import * as React from "react";
import { GoogleAuthProvider, signInWithPopup, getAuth, getRedirectResult, signOut } from "firebase/auth";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import "./style.css";

import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import firebase from "./firebase";
import Layout from "./components/common/Layout";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Profile from "./components/Profile";

function withParams(Component) {
  
  return props => <Component {...props} params={useParams()} />;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scroll: 0,
      rotate: 18,
    };
    this.auth = getAuth();
    this.provider = new GoogleAuthProvider();
    this.provider.addScope('https://www.googleapis.com/auth/userinfo.email');
    this.provider.addScope('https://www.googleapis.com/auth/userinfo.profile');
    this.provider.addScope('https://www.googleapis.com/auth/user.birthday.read');
    this.provider.addScope('https://www.googleapis.com/auth/user.gender.read');
    this.provider.addScope('https://www.googleapis.com/auth/user.organization.read');
    this.state = {
      user: false,
      token: null
    }
    //////console.log(this.props)
    
  }

  signOut = async () => {
    signOut(this.auth).then(() => {
      this.setState({
        user: this.auth.currentUser
      });
      // Sign-out successful.
    }).catch((error) => {
      //////console.log(error);
      // An error happened.
    });
    
  }

  signInwithGoogle = async () => {
    signInWithPopup(this.auth, this.provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      //////console.log(user);
      this.setState({
        user: user
      })
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  }

  async componentDidMount() {
    getRedirectResult(this.auth).then((result)=>{
      //const cred = GoogleAuthProvider.credentialFromResult(result);
      //const token = cred.accessToken;
    
    //////console.log(this.auth.currentUser);
      this.setState({
        user: this.auth.currentUser
        //token: token
      })
    }).catch((err)=>{
      //////console.log(err);
    })
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = (e) => {
    let scr = document.querySelector("html").scrollTop;
    let rotate = scr / 18;
    //rotate = rotate / 18;
    this.setState({
      scroll: scr,
      rotate: scr / 2 > rotate / 2 ? rotate * 2 : -rotate / 2,
    });
   // //////console.log(scr, rotate);
  };
  render() {
    return (
      <div>
        {
          this.state.user === false ? 
          <div style={{position:"absolute", width:"100%", height:"100%", display:"flex", alignItems:"center", justifyContent:"center"}}>Loading...</div> :
          <>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout user={this.state.user} signInwithGoogle={this.signInwithGoogle} signOut={this.signOut} />}>
                <Route index element={<Home user={this.state.user} signInwithGoogle={this.signInwithGoogle} signOut={this.signOut} />} />
                <Route path="/profile" element={<Profile user={this.state.user} signInwithGoogle={this.signInwithGoogle} signOut={this.signOut} />} />
                <Route path="/profile/:id" element={<Profile user={this.state.user} signInwithGoogle={this.signInwithGoogle} signOut={this.signOut} />} />
                <Route path="*" element={<NotFound />} />
              </Route>
              
            </Routes>
          </BrowserRouter>
          
          </>
        }
        
      </div>
    );
  }
}

export default withParams(App);
