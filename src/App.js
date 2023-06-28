import * as React from "react";
import Footer from "./include/Footer";
import Header from "./include/Header";
import "./locomotive-scroll.css";
import "./style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scroll: 0,
      rotate: 18,
    };
  }

  async componentDidMount() {
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
    console.log(scr, rotate);
  };
  render() {
    return (
      <div>
        <Header />
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
              backgroundImage: `url('/swamichair.png')`,
              minHeight: "calc(100vh - 99px)",
              alignItems: "flex-end",
            }}
          >
            <div className="container">
              <div className="p-3"></div>
              <div className="row">
                <div className="col-12">
                  <div
                    className="section-box-o text-center text-bg-dark p-3"
                    style={{}}
                  >
                    <h2 className="m-0">Join Sri Sathya Sai Media Centre</h2>
                  </div>
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
            }}
          >
            <div className="container">
              <div className="p-2"></div>
              <div className="row">
                <div className="col-md-6"></div>
                <div className="col-md-6">
                  <div className="section-box text-center" style={{}}>
                    <h2 className="text-center">
                      We would love for you to join our team
                    </h2>
                    <h4 className="text-center">if you are skilled to work in</h4>
                    <ul className="text-start">
                      <li>Creative Visuals</li>
                      <li>Web / Application Designing and development</li>
                      <li>Video making and editing</li>
                      <li>Music compose and tuning</li>
                      <li>Unique content authoring</li>
                    </ul>
                    graphic design, web programming, application development,
                    music editing, video editing, or unique content authoring.
                    At Sri Sathya Sai Media Centre, you will have the
                    opportunity to work on important initiatives that will make
                    a difference in people's lives and benefit society.
                    <code>
                      A Growth Platform The Sri Sathya Sai Media Centre provides
                      a platform for growth and learning. We cultivate an
                      environment that encourages creativity and innovation
                      while also cultivating individual abilities. Join us today
                      and become a part of an organisation that works to promote
                      positive change!
                    </code>
                    <div>
                      <a href="#join" className="btn btn-primary">
                        <i className="fa-solid fa-angles-down"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-2"></div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
