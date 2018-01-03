// Import libraries for making a compoent
import React from 'react';
import { Text } from 'react-native';

// Make a compoent
const Header = () => {
  const { textStyle } = styles;
  return <Text style={textStyle}>Albums!</Text>
};

// Create style for the header component

const styles = {
  textStyle: {
    fontSize: 20
  }
};


// Make the compoent available to other parts of the app
export default Header;
