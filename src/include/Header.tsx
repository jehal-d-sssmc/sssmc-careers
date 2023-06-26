import * as React from 'react';

class Header extends React.Component {
  render() {
    return (
      <>
        <header className="pb-3 mb-4 border-bottom">
          <a
            href="/"
            className="d-flex align-items-center text-dark text-decoration-none"
          >
            <img
              src="https://www.sssmediacentre.org/755f75139b00a808ae072efc6cdd7ae8.png"
              alt=""
            />
            <span className="fs-4">Sri Sathya Sai Media Centre</span>
          </a>
        </header>
      </>
    );
  }
}

export default Header;
