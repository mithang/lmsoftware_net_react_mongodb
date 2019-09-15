

import React, { Component } from "react";
import Header from "./../Common/Header";
import image  from './../assets/img/header-bg.jpg';
import Services from "./../Common/Services";
import Portfolio from "./../Common/Portfolio";
import {Helmet} from "react-helmet";

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                 <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
                </Helmet>
                <Header
                    title="Welcome To Our Studio!"
                    subtitle="It's Nice To Meet You"
                    buttonText="Tell Me More"
                    link="/services"
                    showButton={true}
                    image={image}
                />
                <Services />
                <Portfolio/>
            </React.Fragment>
        );
    }
}
export default Home;