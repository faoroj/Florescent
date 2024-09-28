import { TouchableOpacity, View, Image, Linking } from 'react-native'
import React from 'react'

const SocialMediaButton = ({ iconSource, url }) => {
    return (
      <View className="w-[70px] h-[70px] rounded-full bg-white justify-center items-center"
        style={{
          shadowColor: 'black', // Set the shadow color to black
          shadowOpacity: 0.25,  // Set the shadow opacity to 25%
          shadowOffset: { width: 0, height: 1 }, // X: 0, Y: 1
          shadowRadius: 7.8, // Blur radius of 7.8
          elevation: 8, // Elevation for Android shadow (if required)
        }}
      >
        <TouchableOpacity onPress={() => Linking.openURL(url)}>
          <Image
            source={iconSource}
            className="w-[41px] h-[47px]"
            resizeMode='contain'
          />
        </TouchableOpacity>
      </View>
    );
  };
  export default SocialMediaButton
  