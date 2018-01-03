import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AlbumList extends Component {
// Define component level state for the albumlist component
  state = { ablums: [] };
 
//init loading some data when the albumlist component rendered
  componentWillMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => this.setState({ albums: response.json() }));
}

  render() {
    console.log(this.state);
    return (
      <View>
        <Text>Album List!!!!</Text>
      </View>
    );
  }
}

export default AlbumList;
