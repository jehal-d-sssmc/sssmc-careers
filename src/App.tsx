import * as React from 'react';
import Footer from './include/Footer';
import Header from './include/Header';
import './style.css';

class App extends React.Component{
  

  render(){
    return (
      <div>
        <Header />
        <h1>Hello StackBlitz!</h1>
        <p>Start editing to see some magic happen :)</p>
        <Footer />
      </div>
    );
  }
}

export default App;
