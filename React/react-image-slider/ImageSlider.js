import React, { Component } from "react";

class ImageSlider extends Component {
  state = {
    images: [
      "https://images.dog.ceo/breeds/pug/n02110958_15615.jpg",
      "https://images.dog.ceo/breeds/redbone/n02090379_5435.jpg",
      "https://images.dog.ceo/breeds/pembroke/n02113023_4373.jpg"
    ],
    count: 0
  };

  componentDidMount() {
    this.myTimer();
  }

  myTimer = () => {
    setInterval(() => {
      if (this.state.count === this.state.images.length - 1) {
        this.setState({ count: 0 });
      } else {
        this.setState(preState => {
          return { count: preState.count + 1 };
        });
      }
    }, 5000);
  };

  render() {
    return (
      <React.Fragment>
        <p>Hello World</p>
        <p>
          Picture {this.state.count + 1} Of {this.state.images.length}
        </p>
        <img src={this.state.images[this.state.count]} alt="dog" />
      </React.Fragment>
    );
  }
}

export default ImageSlider;
