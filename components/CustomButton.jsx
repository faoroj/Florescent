import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading, buttonStyles  }) => {
    // const buttonStyles = variant1 === 'outline' 
    // ? 'border-4 border-primary rounded-3xl bg-white justify-center items-center min-h-[67px]' 
    // : 'bg-primary rounded-3xl justify-center items-center min-h-[67px]';

    const shadowStyles = {
      shadowColor: 'black', // Set the shadow color to black
      shadowOpacity: 0.25,  // Set the shadow opacity to 45%
      shadowOffset: { width: 0, height: 4 }, // X: 0, Y: 1
      shadowRadius: 4, // Blur radius
      elevation: 6, // Elevation for Android shadow (if required)
    };


  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`${buttonStyles} ${containerStyles} ${isLoading ? 'opacity-50' :''}`}
      style={shadowStyles}
      disabled={isLoading}
    >
      <Text className={`${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

