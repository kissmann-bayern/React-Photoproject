import React, { Component } from "react";
import { Slide } from "react-slideshow-image";

class ImageSlider extends Component {
  constructor() {
    super();
    this.slideRef = React.createRef();
    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
    this.state = {
      current: 0
    };
  }

  back() {
    this.slideRef.current.goBack();
  }

  next() {
    this.slideRef.current.goNext();
  }

  render() {
    const properties = {
      duration: 5000,
      autoplay: true,
      transitionDuration: 500,
      arrows: true,
      infinite: false,
      easing: "ease",
      indicators: (i) => <div className="indicator">{i + 1}</div>
    };
    const slideImages = ['https://backend.photoproject-rm.de/uploads/header/2.jpg',
    ];
    return (
 <div className="ImageSlider"> 
         
        <div className="slide-container">
          <Slide ref={this.slideRef} {...properties}>
            {slideImages.map((each, index) => (
              <div key={index} className="each-slide">
                <img className="lazy" src={each} alt="sample" />
              </div>
            ))}
          </Slide>
        </div>

        <div className="slide-container buttons">
          <button onClick={this.back} type="button">
            Go Back
          </button>
          <button onClick={this.next} type="button">
            Go Next
          </button>
        </div>
        </div>
    );
  }
}

export default ImageSlider;
