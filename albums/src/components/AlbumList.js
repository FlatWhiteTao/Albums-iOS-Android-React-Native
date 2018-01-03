import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AlbumList extends Component {
// Define component level state for the albumlist component
  state = { ablums: [] };
//init loading some data when the albumlist component rendered
  componentWillMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => response.json())
      .then((data) => this.setState({ albums: data }));
}

renderAlbums() {
  if (this.state.albums) {
    return this.state.albums.map(album => <Text>{album.title}</Text>);
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
