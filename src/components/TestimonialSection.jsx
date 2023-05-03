import React, { useState, useEffect } from "react";
import "./custom.css";
import { Container } from "react-bootstrap";

const TestimonialSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfJSUxsGfw04sW1HQYJkiW0VdjSX7OLv0FB-RkKlEb&s",
      text: "I had an incredible experience with my buyer! They were prompt, responsive, and easy to work with. I highly recommend them to anyone looking for a smooth and efficient transaction.",
      client: "Hotel New York",
    },
    {
      imageSrc:
        "https://img.freepik.com/free-photo/handsome-young-businessman-suit_273609-6513.jpg",
      text: "I had the pleasure of working with an outstanding buyer who exceeded my expectations. Their attention to detail, prompt payment, and clear communication made the transaction effortless. I would gladly collaborate with them again in the future.",
      client: "Don juke",
    },
    {
      imageSrc:
        "https://media.istockphoto.com/id/1342247162/photo/handsome-middle-eastern-guy-businessman-posing-next-to-office-center.jpg?b=1&s=170667a&w=0&k=20&c=aFFf4WomNrkbLljIvafbk2ukDK4chb34HGjbqb2sQGs=",
      text: "My buyer was a dream to work with! They exhibited a high level of professionalism, demonstrated deep knowledge in their field, and ensured a smooth and successful transaction. I highly recommend them to anyone seeking a top-notch buying experience.",
      client: "Client 3",
    },
  ];

  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  return (
 
      <section className="testimonial text-center my-5 w-100">
        <div className="container">
          <div className="heading white-heading">Testimonial</div>
          <div
            id="testimonial4"
            className="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x"
            data-ride="carousel"
            data-pause="hover"
            data-interval="false"
            data-duration="2000"
          >
            <div className="carousel-inner" role="listbox">
              {testimonials.map((testimonial, index) => (
                <div
                  className={`carousel-item ${
                    index === activeSlide ? "active" : ""
                  }`}
                  key={index}
                >
                  <div className="testimonial4_slide">
                    <img
                      src={testimonial.imageSrc}
                      className="img-circle img-responsive"
                      alt={`Client ${index + 1}`}
                    />
                    <p>{testimonial.text}</p>
                    <h4>{testimonial.client}</h4>
                  </div>
                </div>
              ))}
            </div>
            <a
              className="carousel-control-prev"
              href="#testimonial4"
              role="button"
              data-slide="prev"
              onClick={() =>
                handleSlideChange(
                  (activeSlide - 1 + testimonials.length) % testimonials.length
                )
              }
            >
              <span className="carousel-control-prev-icon" />
            </a>
            <a
              className="carousel-control-next"
              href="#testimonial4"
              role="button"
              data-slide="next"
              onClick={() =>
                handleSlideChange((activeSlide + 1) % testimonials.length)
              }
            >
              <span className="carousel-control-next-icon" />
            </a>
          </div>
        </div>
      </section>
   
  );
};

export default TestimonialSection;
