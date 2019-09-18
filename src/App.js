import React, { Component } from 'react';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';
import Button from "@material-ui/core/Button";
import { fetchGif } from './actions';
import Loading from './components/Loading';
import Carousel from './components/Carousel';

class App extends Component {

  componentDidMount = () => {
    this.props.fetchGif();
  }

  renderGifs = () => {
    const { gifs } = this.props;

    return gifs && gifs.map(gif => ({
      id: gif.id,
      url: `https://media.giphy.com/media/${gif.id}/giphy.gif`
    }))
  }

  render() {
    const { gifs, classes: c, history } = this.props;
    const { renderGifs } = this;

    if (gifs.length === 0) {
      return (
        <Loading />
      )
    }
    return (
      <div className={c.container}>
        <div className={c.CarouselContainer}>
          <div className={c.CarouselWrapper}>
            <Carousel
              gifs={renderGifs()}
            />
          </div>
        </div>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => history.push('/about')}
          className={c.button}
        >
          About
        </Button>
      </div>
    )
  }
}

const mapStateToProps = ({ gifs }) => {
  return { gifs };
}

const styles = {
  container: {
    height: '100%',
    padding: '64px 32px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  CarouselContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  CarouselWrapper: {
    width: '50%',
  },
  button: {
    width: '72px',
    marginTop: '72px',
  }
}

export default connect(
  mapStateToProps,
  { fetchGif }
)(
  injectSheet(styles)(App)
)
