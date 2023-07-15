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
        <header className="p-3 mb-4 border-bottom">
          <nav className="navbar navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">
                <img
                  src="https://www.sssmediacentre.org/755f75139b00a808ae072efc6cdd7ae8.png"
                  alt=""
                  style={{ maxWidth: "36px", marginRight: "5px" }}
                />
                <span className="fs1 pl-3">Sri Sathya Sai</span>
              </Link>
              {
                      this.props.user !== null && this.props.user.photoURL !== null ?
                      
                        <img type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasDarkNavbar"
                        aria-controls="offcanvasDarkNavbar" src={this.props.user.photoURL} alt={this.props.user.displayName} style={{marginRight:"10px", width:"36px", borderRadius: "50%"}} />
                      :
                      <>
                      <button
                        className="navbar-toggler text-light"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasDarkNavbar"
                        aria-controls="offcanvasDarkNavbar"
                      >
                        <span className="navbar-toggler-icon"></span>
                      </button>
                      </>
              }
              
              <div
                className="offcanvas offcanvas-end text-bg-dark"
                tabIndex={-1}
                id="offcanvasDarkNavbar"
                aria-labelledby="offcanvasDarkNavbarLabel"
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                     <span className="fs1">{this.props.user === null ? 'Welcome Guest' : `Welcome ${this.props.user.displayName}`} </span>
                  </h5>
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
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
