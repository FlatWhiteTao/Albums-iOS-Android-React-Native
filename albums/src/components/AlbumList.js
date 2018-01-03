import React, { Component } from 'react';
import { View } from 'react-native';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
// Define component level state for the albumlist component
  state = { ablums: [] };
//init loading some data when the albumlist component rendered
  componentWillMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => response.json())
      .then((data) => this.setState({ albums: data }));
}

// As the sample data center connected does not provide data
// with a uuid. so in this case, using the album title as a
// key for now.
renderAlbums() {
  if (this.state.albums) {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }
}

render() {
    console.log(this.state);
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;
