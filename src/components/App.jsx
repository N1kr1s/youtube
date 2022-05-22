import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit('react js');
  }

  onTermSubmit = async (term) => {
    const responce = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    this.setState({
      videos: responce.data.items,
      selectedVideo: responce.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <>
        <h1 style={{ textAlign: 'center' }}>Youtube Search</h1>
        <div className='ui container'>
          <SearchBar handleTermSubmit={this.onTermSubmit} />
          <div className='ui grid'>
            <div className='ui row'>
              <div className='eleven wide column'>
                <VideoDetail video={this.state.selectedVideo} />
              </div>
              <div className='five wide column'>
                <VideoList
                  onVideoSelect={this.onVideoSelect}
                  videos={this.state.videos}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
