import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchGif } from './actions';
import Loading from './components/Loading';
import Button  from './components/Button';

class App extends Component {

  componentDidMount = () => {
    this.props.fetchGif();
  }

  renderGifs = () => {
    const { gifs } = this.props;

    return gifs && gifs.map(gif => {
      const gifUrl = `https://media.giphy.com/media/${gif.id}/giphy.gif`
      return (
        <img src={gifUrl} alt="loading" />
      )
    })
  }

  render() {
    const { gifs, index = 0 } = this.props;
    const { renderGifs } = this;
    console.log(gifs);
    console.log(index);
    
    if (gifs.length === 0) {
      return (
        <Loading />
      )
    }
    return (
      <div>
        <div>
          <div style={{ height: '100px', width: '100px'}}>
            <Button />
          </div>
          
          {renderGifs()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({gifs}) => {
  return {gifs};
}

export default connect(mapStateToProps, { fetchGif })(App)
