import React, { Component } from 'react';

class Contact extends Component {
    render() {
      if(this.props.data){
        var name = this.props.data.name;
        var street = this.props.data.address.street;
        var city = this.props.data.address.city;
        var state = this.props.data.address.state;
        var zip = this.props.data.address.zip;
        var phone = this.props.data.phone;
        }
        return (
          <section id="contact">
              <div className="row section-head">
                  <div className="two columns header-col">
                      <h1><span>Get In Touch.</span></h1>
                  </div>
                  <div className="ten columns">
                      <p className="lead">If you have any questions please do not hesitate to call or send in this contact form and we will reach out to you as soon as possible.
                      </p>
                  </div>
              </div>
              <div className="row">
                  <div className="eight columns">
                      <form action="https://formspree.io/briandennis16@hotmail.com" method="POST" id="contactForm" name="contactForm">
                          <fieldset>
                              <div>
                                  <label htmlFor="contactName">Name <span className="required">*</span></label>
                                  <input type="text" id="contactName" name="contactName" />
                              </div>
                              <div>
                                  <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                                  <input type="text" id="contactEmail" name="contactEmail" />
                              </div>
                              <div>
                                  <label htmlFor="contactSubject">Subject</label>
                                  <input type="text" id="contactSubject" name="contactSubject" />
                              </div>
                              <div>
                                  <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                                  <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                              </div>
                              <div>
                              	  <label></label>
								  <input type="submit" className="submit" value="Send" />
                                  <span id="image-loader">
                                  	<img src="images/loader.gif" />
                                  </span>
                              </div>
                          </fieldset>
                      </form>
                      <div id="message-warning"> Error boy</div>
                      <div id="message-success">
                          <i className="fa fa-check"></i>Your message was sent, thank you!
                          <br />
                      </div>
                  </div>
                  <aside className="four columns footer-widgets">
                      <div className="widget widget_contact">
                          <h4>Address and Phone</h4>
                          <p className="address">
                              {name}
                              <br /> {street}
                              <br /> {city}, {state} {zip}
                              <br />
                              <span>{phone}</span>
                          </p>
                      </div>
                  </aside>
              </div>
          </section>
        );
    }
}

export default Contact;
