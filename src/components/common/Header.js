import * as React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  constructor(props){
    super(props)
    

    console.log(this.props)
  }
  componentDidMount(){
    
  }

  signIn = async () => {
    await this.props.signInwithGoogle()
  }

  signOut = async () => {
    await this.props.signOut();
  
    //window.location.reload();
  }

  render() {
    return (
      <>
        <header className="main-header">
          <nav className="navbar navbar-dark bg-white-alpha sticky-top p-0">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">
                <img
                  src="https://www.sssmediacentre.org/755f75139b00a808ae072efc6cdd7ae8.png"
                  alt=""
                  style={{ maxWidth: "45px", marginRight: "5px" }}
                />
                <span className="fs1 pl-3 text-danger" style={{fontWeight:"bold"}}>SRI SATHYA SAI</span>
              </Link>
              {
                      this.props.user !== null && this.props.user.photoURL !== null ?
                      
                        <ul className="d-flex m-0 p-2" style={{alignItems:"center"}}>
                          <li className="list-inline-item">
                          <img type="button"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvasDarkNavbar"
                          aria-controls="offcanvasDarkNavbar" src={this.props.user.photoURL} alt={this.props.user.displayName} style={{marginRight:"10px", width:"36px", borderRadius: "50%"}} />
                          </li>
                        
                        </ul>
                      :
                      <>
                      <img type="button" 
                          onClick={this.signIn}
                         src={'/profilepic.png'} alt={'Guest'} style={{marginRight:"10px", width:"36px", borderRadius: "50%"}} />
                      {/*<button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasDarkNavbar"
                        aria-controls="offcanvasDarkNavbar"
                      >
                        <i className="fa-solid fa-bars"></i>
                      </button>*/}
                      </>
              }
              
              <div
                className="offcanvas offcanvas-end bg-white-o"
                tabIndex={-1}
                id="offcanvasDarkNavbar"
                aria-labelledby="offcanvasDarkNavbarLabel"
              >
                <div className="offcanvas-header">
                  <h5 className="text-danger" id="offcanvasDarkNavbarLabel">
                     <span className="fs1">{this.props.user === null ? 'Welcome Guest' : `Welcome ${this.props.user.displayName}`} </span>
                  </h5>
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  > <i className="fa-solid fa-close"></i></button>
                </div>
                <div className="offcanvas-body">
                  <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item">
                      <Link
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                      >
                       <i class="fa-solid fa-house"></i>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={'/profile'}>
                        Profile
                      </Link>
                    </li>
                    
                    <li className="nav-item">
                      {
                        this.props.user === null ?
                        <a
                          className="nav-link"
                          aria-current="page"
                          data-bs-dismiss="offcanvas"
                          aria-label="Close"
                          onClick={this.signIn}
                          href="/#applynow"
                        >
                         <i className="fa-solid fa-right-to-bracket"></i> Sign In
                        </a>
                        :
                        <a
                          className="nav-link"
                          aria-current="page"
                          data-bs-dismiss="offcanvas"
                          aria-label="Close"
                          onClick={this.signOut}
                          href="#"
                        >
                         <i className="fa-solid fa-right-from-bracket"></i> SignOut
                        </a>
                      }
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </>
    );
  }
}

export default Header;
