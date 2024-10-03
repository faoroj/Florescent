import { View, Text, ScrollView, Image, TextInput, FlatList } from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Searchshop from '../../components/Searchshop';
import { images, icons } from '../../constants'
import CustomButton from '../../components/CustomButton'
import { Link, router } from 'expo-router'
import {LinearGradient} from 'expo-linear-gradient';
import Carousel from '../../components/Carousel';







const Home = () => {

  return (
    <SafeAreaView className="h-full">
      <ScrollView>
        
        <View className="w-full flex justify-center items-center min-h-[85vh] my-6">

          {/* Search Bar */}
          <Searchshop />

          <View className="relative w-full"> 
            <Carousel />
          </View>

          
          


          {/*Best Deals Section */}
          <LinearGradient
            colors={['#F0E3FF', '#FFFFFF']} // Define gradient colors
            start={{ x: 0, y: 0 }} // Start point for the gradient
            end={{ x: 0, y: 1 }} // End point for the gradient (vertical gradient)
            className=" h-[260px] w-full mt-10 " // Gradient container styling
          >

            <View className="flex flex-row justify-between items-center p-4">
              <Text className="font-regular text-[26px]">Best Deals</Text>
              <View className="flex flex-row items-center">
                <Text className="font-regular text-[12px] text-primary-200">Show More</Text>
                <Image
                  source={icons.rightarrowpurple}
                  className="w-[20px] h-[20px]"
                  resizeMode="contain"
                />
              </View>
            </View>

          </LinearGradient>

          {/*Embrace your garden's needs */}
          <View className="relative">
            <Image
              source={images.flowercare} 
              className="w-[428px] h-[436px] my-5"
              resizeMode="contain"
            />

            {/* Overlay container */}
            <View className="absolute inset-0 px-4 py-16 flex justify-between">

              {/* Header Text */}
              <Text className="font-bold text-[26px] text-white max-w-[280px]">Embrace your garden's needs</Text>

                {/* Subtitle Text */}
                <Text className="font-regular text-[12px] text-white max-w-[220px]">
                  Nurturing each plant with care, ensures a blooming beauty that lasts
                </Text>

                <CustomButton
                    title="Read now"
                    handlePress={() => router.push('/home')}
                    containerStyles="mt-10"
                />
            </View>
          </View>

          {/*Sustainable Floristry*/}
          <View className="relative">
            <Image
              source={images.sustainablefloristry} 
              className="w-[428px] h-[315px] my-5"
              resizeMode="contain"
            />

            {/* Overlay container */}
            <View className="absolute inset-0 px-4 py-16 flex justify-between">

              {/* Header Text */}
              <Text className="font-bold text-[26px] text-white max-w-[280px]">Sustainable Floristry</Text>

                {/* Subtitle Text */}
                <Text className="font-regular text-[12px] text-white max-w-[220px]">
                  Reducing waste and providing eco-friendly flowers for bouquets 
                </Text>

                <CustomButton
                    title="Read now"
                    handlePress={() => router.push('/home')}
                    containerStyles="mt-10"
                />
            </View>
          </View>


        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home