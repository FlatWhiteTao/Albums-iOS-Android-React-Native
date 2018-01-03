import React, { Component } from 'react';
import { View, Text } from 'react-native';
//import axios from 'axios'

class AlbumList extends Component {
  //init loading some data when the albumlist component rendered
  state = { ablums: [] };

  componentWillMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => this.setState({ albums: response._bodyText }));
    //axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      //.then((response) => console.log(response));
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
