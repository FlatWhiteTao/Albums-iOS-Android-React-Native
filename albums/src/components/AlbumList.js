import React, { Component } from 'react';
import { View, Text } from 'react-native';
//import axios from 'axios'

class AlbumList extends Component {
  //init loading some data when the albumlist component rendered
  componentWillMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => console.log(response));
    //axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      //.then((response) => console.log(response));
}

  render() {
    return (
      <View>
        <Text>Album List!!!!</Text>
      </View>
    );
  }
}

export default AlbumList;
