import React from "react";
import EditProfile from "./EditProfile";

class Profile extends React.Component{

  async componentDidMount() {
    this.handleScroll();
    //console.log(this.props)
     // window.addEventListener("scroll", this.handleScroll);
  }
  handleScroll = (e) => {
     // let scr = document.querySelector("html, .wrapper");
      window.scrollTo({ top: 0, behavior: 'smooth' });
      document.querySelector("html").scrollTo({ top: 0, behavior: 'smooth' });
      document.querySelector(".wrapper").scrollTo({ top: 0, behavior: 'smooth' });

    // //console.log(scr, rotate);
  };

    render(){
        return <>
        <section
            id="applynow"
            className="section-content-o"
            style={{
              backgroundSize: "cover",
              paddingTop: "72px",
              minHeight: "calc(100vh - 99px)",
              alignItems: "flex-start",
            }}
          >
            <div className="container">
                  {
                    this.props.user === null ? 
                    <>
                    <div className="p-3"></div>
                    <h2 className="text-center">Create your profile</h2>
                    <hr />
                    <div className="row">
                      <div className="col-12"></div>
                      <div className="p-3"></div>
                      <div className="text-center">
                        <button type="button" className="btn btn-warning" onClick={this.props.signInwithGoogle}>
                          <img src="https://developers.google.com/static/identity/images/btn_google_signin_light_normal_web.png" alt="Sign In With Google" />
                        </button>
                      </div>
                      <div className="p-3"></div>
                    </div>
                    </> :
                    <>
                    <div className="p-3"></div>
                    <h2 className="text-center">Manage profile</h2>
                    <hr />
                    <EditProfile user={this.props.user} />
                    </>
                  }
              </div>
          </section>
        </>
    }
}

export default Profile;