import * as React from "react";
import Footer from "./include/Footer";
import Header from "./include/Header";
import "./style.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <div className="container text-center">
            <h1 className="display-1">Career Opportunities</h1>
            <p>
              Work towards a good cause by joining our team of outstanding
              contributors!
            </p>
            <hr />

            <ul className="list-group">
              <li className="list-group-item">
                <div className="row">
                  <div className="col-12 col-sm-6 col-md-4 align-self-center">
                    <div className="display-4">Employment and Volunteering</div>
                  </div>
                  <div className="col-12 col-sm-6 col-md-8 align-self-center">
                    We are continuously on the lookout for talented people that
                    are driven to support the organisation. Sai doors are open
                    to anyone who wants to devote their time and talents to
                    bettering the planet.
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="row">
                  <div className="col-12 col-sm-6 col-md-4 align-self-center">
                    <div className="display-4">Internship Program</div>
                  </div>
                  <div className="col-12 col-sm-6 col-md-8 align-self-center">
                    For those who are looking to gain valuable experience in the
                    media industry, we offer internship programs in various
                    fields such as graphic design, web development, application
                    development, music editing, video editing and creative
                    content writing. Our internship programs provide hands-on
                    training and mentorship from experienced professionals.
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="container">
            <hr />
            <h2 className="text-center">Join Sri Sathya Sai Media Centre</h2>
            <p>
              We would love for you to join our team of contributors if you have
              a talent for graphic design, web programming, application
              development, music editing, video editing, or unique content
              authoring. At Sri Sathya Sai Media Centre, you will have the
              opportunity to work on important initiatives that will make a
              difference in people's lives and benefit society.
            </p>
            <code>
              A Growth Platform The Sri Sathya Sai Media Centre provides a
              platform for growth and learning. We cultivate an environment that
              encourages creativity and innovation while also cultivating
              individual abilities. Join us today and become a part of an
              organisation that works to promote positive change!
            </code>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
