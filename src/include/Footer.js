import * as React from "react";
const unreal = (vars) => {
  return vars === undefined || vars === null || vars === "";
};
const url = `${window.location.protocol}//${window.location.hostname}${
  window.location.port === "80" || unreal(window.location.port)
    ? ""
    : `:${window.location.port}`
}`;

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer-title">
          <div className="container">
            <div className="title-img">
              <img
                src="https://www.srisathyasai.org/pages/assets/img/sai/footer-logo.svg"
                alt="sraisaibaba"
                style={{ margin: "auto", maxWidth: "64px" }}
              />
              <br />
              <img
                src={`${url}/sathya-sai-signature.png`}
                alt="sraisaibaba"
                style={{ margin: "auto", maxWidth: "800px", width: "100%" }}
              />
            </div>
          </div>
        </div>

        <div className="footer-bottom-section">
          <div className="container">
            <div className="footer-bottom-content">
              <div className="row">
                <div className="col-md-12">
                  <div className="copy-rights">
                    @ {new Date().getFullYear()} <a href="https://www.srisathyasai.org">Sri Sathya Sai Central Trust</a> -
                    <a href="https://www.sssmediacentre.org">SSSMC</a> Division. All Rights Reserved
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
