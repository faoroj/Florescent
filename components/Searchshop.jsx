import React from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import { icons } from '../constants'; // Adjust this import based on the actual path

const Searchshop = () => {
  return (
    // Search Bar
    <View
      className="w-[75%] flex-row justify-center rounded-3xl items-center bg-white p-1"
      style={{ borderWidth: 2, borderColor: '#E5D4FF', width: '75%' }}
    >
      {/* Left side: Image */}
      <Image
        source={icons.search} // Your search icon image
        className="w-[20px] h-[20px] ml-2"
        resizeMode="contain"
      />
      {/* Middle: Search Text */}
      <Text className="text-gray-500 ml-2">Search</Text>
      {/* Right side: Text Input */}
      <TextInput className="ml-2 flex-1 text-black" />
      {/* Right side: Microphone Image */}
      <Image
        source={icons.microphone} // Your microphone icon image
        className="w-[20px] h-[20px] mr-2"
        resizeMode="contain"
      />
    </View>
  );
};

export default Searchshop;