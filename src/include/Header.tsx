import * as React from 'react';

class Header extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <header className="p-3 mb-4 border-bottom">
            <a
              href="/"
              className="d-flex align-items-center text-dark text-decoration-none"
            >
              <img
                src="https://www.sssmediacentre.org/755f75139b00a808ae072efc6cdd7ae8.png"
                alt=""
              />
              <span className="fs-4 pl-3">Sri Sathya Sai Media Centre</span>
            </a>
          </header>
        </div>
      </>
    );
  }
}

export default Header;
