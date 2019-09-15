


import React, { Component } from "react";
import Field from "./../Common/Field";
//import image  from './../assets/img/header-bg.jpg';
//import Services from "./../Common/Services";
//import Portfolio from "./../Common/Portfolio";
import { withFormik } from "formik";
import * as Yup from "yup";
import {Helmet} from "react-helmet";

const fields = {
  sections: [
    [
      { name: "name", elementName: 'input', type: 'text', placeholder: 'Your name' },
      { name: "email", elementName: 'input', type: 'email', placeholder: 'Your email' },
      { name: "phone", elementName: 'input', type: 'text', placeholder: 'Your phone' }
    ],
    [
      { name: "message", elementName: 'textarea', type: 'text', placeholder: 'Type Your message' }
    ]
  ]
}

class Contact extends Component {



  render() {
    return (
      <React.Fragment>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Contact us</title>
                <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <section className="page-section" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Contact Us</h2>
              <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <form onSubmit={this.props.handleSubmit} id="contactForm" name="sentMessage" noValidate="novalidate">
                <div className="row">

                  {
                    fields.sections.map((section, sectionIndex) => {
                      return (
                        <div className="col-md-6" key={sectionIndex}>
                          {section.map((field, i) => {
                            return <Field
                              {...field}
                              key={i}
                              value={this.props.values[field.name]}
                              name={field.name}
                              onChange={this.props.handleChange}
                              onBlur={this.props.handleBlur}
                              touched={(this.props.touched[field.name])}
                              errors={(this.props.errors[field.name])}
                            />
                          })}
                        </div>
                      )
                    })
                  }

                  <div className="clearfix"></div>
                  <div className="col-lg-12 text-center">
                    <div id="success"></div>
                    <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      </React.Fragment>
    );
  }
}
export default withFormik({
  mapPropsToValues: () => ({
    name: '',
    email: '',
    phone: '',
    message: '',
  }),
  // validate: values => {
    
  //   const errors = {};
  //   Object.keys(values).map(v => {
  //     if (!values[v]) {
  //       errors[v] = "Required";
  //     }
  //   })
  //   return errors;
  // },
  validationSchema: Yup.object().shape({
    name: Yup.string().min(3,'Your name is long short').required('You must give us your name.'),
    email: Yup.string().email('You need to give us a valid email').required('Email khong de trong.'),
    phone: Yup.string().min(10,'Phai cung cap 10 so').required('Phone khong de trong.'),
    message: Yup.string().min(500,'Message is long short').required('Message khong de trong.'),
  }),
  handleSubmit: (values, { setSubmitting }) => {
    console.log(values);
    alert("You've submitted the form", JSON.stringify(values));
  },
  displayName: 'BasicForm',
})(Contact);