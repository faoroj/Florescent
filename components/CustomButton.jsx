import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading, variant  }) => {
    const buttonStyles = variant === 'outline' 
    ? 'border-4 border-primary rounded-3xl justify-center items-center min-h-[67px]' 
    : 'bg-primary rounded-3xl justify-center items-center min-h-[67px]';


  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`${buttonStyles} ${containerStyles} ${isLoading ? 'opacity-50' :''}`}
      disabled={isLoading}
    >
      <Text className={`text-[28px] ${variant === 'outline' ? 'text-gray-400' : 'text-white'} font-fmedium ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

