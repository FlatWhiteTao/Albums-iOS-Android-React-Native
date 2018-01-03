// Import libraries for making a compoent
import React from 'react';
import { Text, View } from 'react-native';

// Make a compoent
const Header = () => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Albums!</Text>
    </View>
  );
};

// Create style for the header component

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2
  },
  textStyle: {
    fontSize: 20
  }
};


// Make the compoent available to other parts of the app
export default Header;
