import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import Searchshop from '../../components/Searchshop';
import { SafeAreaView } from 'react-native-safe-area-context';
import { categories } from '../../constants';

const shadowStyles = {
  shadowColor: 'black', // Set the shadow color to black
  shadowOpacity: 0.25,  // Set the shadow opacity to 45%
  shadowOffset: { width: 0, height: 4 }, // X: 0, Y: 1
  shadowRadius: 5, // Blur radius
  elevation: 5, // Elevation for Android shadow (if required)
};



const Collections = () => {
  return (
    <SafeAreaView className="h-full bg-white">

      <View className="w-full flex justify-start items-center my-6">
        {/* Search Bar */}
        <Searchshop />
      </View>

      <ScrollView>
        <View className="w-full flex justify-start items-center min-h-[85vh]">

          

          {categories.map((category, index) => (
          <View 
            className={`w-[340px] h-[96px] bg-gray-100 ${index === 0 ? 'mt-1' : 'mt-8' } flex flex-row justify-between items-center`}
            style={shadowStyles}
          >
            <Text className="flex justify-center items-center text-[26px] p-4">{category.title}</Text>
            <Image
              source={category.image} 
              className="w-[150px] h-[96px]"
              resizeMode="contain"
            />
          </View>
          ))}





        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Collections