import React from "react";
import {
  faPhone,
  faMapMarkerAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "./custom.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ContactUs = () => {
  return (
    <section className="contact-sec sec-pad my-3 pb-3" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="contact-detail">
              <h1 className="section-title">Contact us</h1>

              <ul className="contact-ul">
                <li className="list-unstyled">
                  <FontAwesomeIcon
                    className="border-0 me-2"
                    icon={faMapMarkerAlt}
                  />{" "}
                  123 Main Street Anytown, USA 12345
                </li>

                <li className="list-unstyled">
                  <FontAwesomeIcon className="border-0 me-2" icon={faPhone} />
                  <a href="tel:08510004495">
                    <b>(555) 123-4567</b>
                  </a>
                  ,
                  <a href="tel:08510005495">
                    <b>(555) 153-456658</b>
                  </a>
                </li>

                <li className="list-unstyled">
                  <FontAwesomeIcon
                    className="border-0 me-2"
                    icon={faEnvelope}
                  />
                  <a href="mailto:pardeepkumar4bjp@gmail.com">
                    <b> demounknown@gmail.com</b>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-6">
            <form action="#" className="contFrm" method="POST">
              <div className="row">
                <div className="col-sm-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="inptFld"
                    required
                  />
                </div>

                <div className="col-sm-6">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="inptFld"
                    required
                  />
                </div>

                <div className="col-sm-6">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="inptFld"
                    required
                  />
                </div>

                <div className="col-sm-6">
                  <input
                    type="text"
                    name="sub"
                    placeholder="Subject"
                    className="inptFld"
                    required
                  />
                </div>

                <div className="col-12">
                  <textarea
                    className="inptFld"
                    rows=""
                    cols=""
                    placeholder="Your Message..."
                    required
                  ></textarea>
                </div>

                <div className="col-12">
                  <input
                    type="submit"
                    name="submit"
                    value="SUBMIT"
                    className="inptBtn"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
