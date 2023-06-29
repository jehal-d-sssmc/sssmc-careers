import * as React from "react";
import { GoogleAuthProvider, signInWithPopup, getAuth, getRedirectResult, signOut } from "firebase/auth";
import Footer from "./include/Footer";
import Header from "./include/Header";
import "./style.css";
import firebase from "./firebase";

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
    this.provider.addScope('https://www.googleapis.com/auth/user.phonenumbers.read');
    this.state = {
      user: false,
      token: null
    }

    
  }

  signOut = async () => {
    signOut(this.auth).then(() => {
      this.setState({
        user: this.auth.currentUser
      })
      // Sign-out successful.
    }).catch((error) => {
      console.log(error);
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
      console.log(user);
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
    
    console.log(this.auth);
      this.setState({
        user: this.auth.currentUser
        //token: token
      })
    }).catch((err)=>{
      console.log(err);
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
   // console.log(scr, rotate);
  };
  render() {
    return (
      <div>
        {
          this.state.user === false ? 
          <div style={{position:"absolute", width:"100%", height:"100%", display:"flex", alignItems:"center", justifyContent:"center"}}>Loading...</div> :
          <>
          <Header user={this.state.user} signInwithGoogle={this.signInwithGoogle} signOut={this.signOut} />
        <main id="data-scroll-container">
          <section
            id="intro"
            className="banner-container"
            style={{
              backgroundImage: `url('/sssmc-outer.png')`,
              backgroundSize: "cover",
              //backgroundImage: `url('/assets/images/studiowork.jpg')`,
              height: "calc(100vh - 99px)",
            }}
          >
            <div
              className="banner-box text-center"
              style={{
                transform: `perspective(750px) translate3d(0px, ${
                  this.state.scroll < 300 ? this.state.scroll : "300"
                }px, -50px) rotateX(${this.state.rotate}deg)
    rotateY(0deg) scale(1, 1)`,
              }}
            >
              <h1 className="display-1">CAREERS</h1>
              <p>
                Work towards a good cause by joining our team of outstanding
                contributors!
              </p>
              <div>
                <a href="#join" className="btn btn-primary">
                  <i className="fa-solid fa-angles-down"></i>
                </a>
              </div>
            </div>
          </section>
          <section
            id="join"
            className="section-content-o"
            style={{
              backgroundSize: "cover",
              minHeight: "calc(100vh - 99px)",
              alignItems: "flex-start",
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="p-3"></div>
                  <div
                    className="section-box-o text-center p-3"
                    style={{}}
                  >
                    <h2 className="display-4">Join us for the divine mission</h2>
                    <p>At Sri Sathya Sai Media Centre, you will have the opportunity to work on important initiatives that will make a
              difference in people's lives and benefit society.</p>
                    <a href="#applynow" className="btn text-bg-dark">
                      Apply Now
                    </a>
                  </div>
                  <div className="p-3"></div>
                  <div className="banner-2-cover" style={{backgroundImage: "url(/swamichair.png)"}}>
                    <div style={{position:"relative"}}>
                    <img src="/swamichair.png" style={{maxWidth:"100%", borderRadius:"15px", visibility: 'hidden'}} />
                    <div className="section-box banner-2" style={{}}>
                    <div className="contents text-center">
                    <p>
                    For the progress of humanity, work alone is not adequate, but the work should be associated with love, compassion, right conduct, truthfulness and sympathy. Without the above qualities, selfless service cannot be performed.
                    </p>
                    <strong className="h5">- Sri Sathya Sai Baba</strong>
                    </div>
                    
                    </div>
                    </div>
                  </div>
                  <div className="p-5"></div>
                </div>
              </div>
            </div>
          </section>

          <section
            className="section-content-o"
            style={{
              backgroundAttachment: "fixed",
              backgroundSize: "cover",
              backgroundImage: `url('/assets/images/studiowork.jpg')`,
              minHeight: "calc(100vh - 99px)",
              alignItems:"center"
            }}
          >
            <div className="container mobile-9">
              <div className="p-2"></div>
              <div className="row">
                <div className="col-md-6"></div>
                <div className="col-md-6">
                  <div className="section-box text-center" style={{}}>
                    <div className="contents">
                      <h2 className="text-center">
                        Apply Now
                      </h2>
                      <h4 className="text-center">if you have any skill from below</h4>
                      <hr />
                      <ul className="text-start">
                        <li>Web & App UI/UX designing and development</li>
                        <li>IT Networking</li>
                        <li>Photography & Graphics</li>
                        <li>Social Media & SEO</li>
                        <li>Video making and editing</li>
                        <li>Music compose and tuning</li>
                        <li>Unique content authoring</li>

                      </ul>
                      
                      <code>
                        A Growth Platform The Sri Sathya Sai Media Centre provides
                        a platform for growth and learning. We cultivate an
                        environment that encourages creativity and innovation
                        while also cultivating individual abilities. Join us today
                        and become a part of an organisation that works to promote
                        positive change!
                      </code>
                      
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-2"></div>
            </div>
          </section>
          <section
            id="applynow"
            className="section-content-o"
            style={{
              backgroundSize: "cover",
              minHeight: "calc(100vh - 99px)",
              alignItems: "flex-start",
            }}
          >
            <div className="container">
              <div className="p-3"></div>
              <h2 className="text-center">Apply Now</h2>
              <hr />
              <div className="row">
                <div className="col-12">
                  {
                    this.state.user === null ? 
                    <>
                    <div className="p-3"></div>
                    <div className="text-center">
                      <button type="button" className="btn btn-warning" onClick={this.signInwithGoogle}>
                        <img src="https://developers.google.com/static/identity/images/btn_google_signin_light_normal_web.png" alt="Sign In With Google" />
                      </button>
                    </div>
                    <div className="p-3"></div>
                    </> :
                    <></>
                  }
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer user={this.state.user} />
          </>
        }
        
      </div>
    );
  }
}

export default App;
