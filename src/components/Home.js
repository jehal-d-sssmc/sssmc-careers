import React from "react";
import { motion } from "framer-motion"
import { Link } from "react-router-dom";

class Home extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            scroll: 0,
            rotate: 18,
        };
    }

    async componentDidMount() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        document.querySelector("html").scrollTo({ top: 0, behavior: 'smooth' });
        document.querySelector(".wrapper").scrollTo({ top: 0, behavior: 'smooth' });
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

    render(){
        return (<>
        <motion.div 
          animate={{ baseFrequency: 0.5 }}
          transition={{ type: "spring", mass: 0.5 }}
          >
          <section
            id="intro"
            className="banner-container"
            style={{
              backgroundImage: `url('/sssmc-outer.png')`,
              backgroundSize: "cover",
              //backgroundImage: `url('/assets/images/studiowork.jpg')`,
              height: "calc(100vh)",
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
          </motion.div>
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
                    <h2 className="display-4">Be a part of the divine mission</h2>
                    <p>At Sri Sathya Sai Media Centre, you will have the opportunity to work on important initiatives that will make a
              difference in people's lives and benefit society.</p>
                    <Link to="/profile" className="btn text-bg-dark">
                      Apply Now
                    </Link>
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
                        Work Environment
                      </h2>
                      <hr />
                      <p>
                      The Sri Sathya Sai Media Centre provides a platform for growth and learning, providing an environment that encourages creativity and innovation. More importantly, the work culture inspires the pure idea of making one's efforts an offering to God. Join us today and become a part of an organisation that works tirelessly to spread the universal message of Bhagawan Sri Sathya Sai Baba!




                      </p>
                      
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-2"></div>
            </div>
          </section>
        </>)
    }
}

export default Home;