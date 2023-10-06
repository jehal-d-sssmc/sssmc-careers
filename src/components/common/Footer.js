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
                  <div className="copyright">
                    &copy; {new Date().getFullYear()} <a href="https://www.sssmediacentre.org" target="_blank" ref={'noreferrer'}><span className="sssct-logo"><img src="https://www.sssmediacentre.org/755f75139b00a808ae072efc6cdd7ae8.png" width={"45px"} alt="" /></span>Sri Sathya Sai Media Centre</a> <br className="d-md-none" />Division of <a href="https://www.srisathyasai.org/" target="_blank" ref={'no-referrer'}><span className="sssct-logo"><img  width={"45px"}  alt="" src="data:image/jpeg;base64,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" /></span>Sri Sathya Sai Central Trust</a>.<br className="d-md-none" /> All Rights
              Reserved
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
