import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

class Layout extends React.Component{

    render(){
        return <>
            <Header user={this.props.user} signInwithGoogle={this.props.signInwithGoogle} signOut={this.props.signOut} />
            <div className="wrapper">
                <main id="data-scroll-container">
                    <Outlet />
                </main>
                <Footer user={this.props.user} />
            </div>
        </>
    }
}

export default Layout;