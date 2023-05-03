import React from "react";
import "./custom.css";
const TestimonialSection = () => {
  return (
    <div className="testim">
      <div className="container">
        <h2>Testimonials</h2>
        <div className="testim-content ">
          <div className="testim-box">
            <p>
              Floury Uniq is hands down the best chef website I've come across.
              The layout is sleek and user-friendly, making it a breeze to
              navigate through the various recipes and cooking tips
            </p>
            <div className="testim-box-content">
              <img
                src="https://media.istockphoto.com/id/1319014901/photo/receptionist-in-a-hotel-lobby-holding-a-clipboard.jpg?s=612x612&w=0&k=20&c=xVcZukZvsYS9USlsY1_TFTmpkmDZ1ZG2uoOD0zRJBbY="
                alt=""
              />
              <h3>Brian Chesky</h3>
              <p>The panda food</p>
            </div>
          </div>
          <div className="testim-box">
            <p>
              The community aspect of Floury's is fantastic as well. The
              interactive forums allow users to connect, share their
              experiences, and seek advice. It's a great platform for food
              enthusiasts to engage and learn from one another.
            </p>
            <div className="testim-box-content">
              <img
                src="https://media.istockphoto.com/id/494588822/photo/concept-for-businesswoman-in-expensive-hotel.jpg?s=612x612&w=0&k=20&c=xN__5u06CFNWg1jk3cDeRVzBwQ2zcdt3CM7sYq50yRI="
                alt=""
              />
              <h3>Larry Ellison</h3>
              <p>Oracle Corporation</p>
            </div>
          </div>
          <div className="testim-box">
            <p>
              Overall, Floury's Delight has become my go-to resource for
              culinary inspiration. Whether you're a seasoned chef or just
              starting your cooking journey, I highly recommend visiting Chef's
              Delight for a delightful culinary experience.
            </p>
            <div className="testim-box-content">
              <img
                src="https://www.hospitalitynet.org/picture/153128581/cody-bertone.jpg?t=1623932787"
                alt=""
              />
              <h3>Travis Kalanick</h3>
              <p>Hailing resturant </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
