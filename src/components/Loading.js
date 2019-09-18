import React, { Component } from 'react';

class Loading extends Component {
  state={
    show: false,
    dots: ''
  }

  dotGenerator = () => {
    let time = 0;
    return setInterval(() => {
      time = time + 1;
      const dots = time % 3;
      switch (dots) {
        case 0:
          this.setState({ dots: '...' });
          break;
        case 1:
          this.setState({ dots: '.' });
          break;
        case 2:
          this.setState({ dots: '..' });
          break;
        default:
          this.setState({ dots: '' });
      }
    }, 500);
  };

  componentDidMount() {
    this.interval = this.dotGenerator();
    this.timeout = setTimeout(() => this.setState({ show: true }), 2000);
  }

  componentWillUnmount() {
    const { interval, timeout } = this;
    if (interval) {
      clearInterval(interval);
    }
    if (timeout) {
      clearTimeout(timeout);
    }
  }

  render() {
    const { dots, show } = this.state;
    return (
      <div>
        {
          show &&
          <h2>
            {`Loading${dots}`}
          </h2>
        }
      </div>
    );
  }
}

export default Loading;