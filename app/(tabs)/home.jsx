import { View, Text, ScrollView, Image, TextInput, FlatList, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Searchshop from '../../components/Searchshop';
import { images, icons } from '../../assets'
import { occasions } from '../../constants';
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
            <View className="absolute inset-0 px-6 py-16 flex justify-between h-[436px]">
              <View>
                {/* Header Text */}
                <Text className="font-bold text-[26px] text-white max-w-[280px]">Embrace your garden's needs</Text>

                {/* Subtitle Text */}
                <Text className="font-regular text-[12px] text-white max-w-[220px] mt-4">
                  Nurturing each plant with care, ensures a blooming beauty that lasts
                </Text>
              </View>

                <View className="absolute bottom-0 right-0 items-center mb-3">
                  <CustomButton
                    title="Read now"
                    handlePress={() => router.push('/home')}
                    containerStyles=""
                    buttonStyles="bg-white rounded-[6px] justify-center items-center h-[44px] w-[213px]"
                    textStyles="text-[18px] text-black font-semibold"
                  />
                </View>

            </View>
          </View>

          {/*Sustainable Floristry*/}
          <View className="relative my-5">
            <Image
              source={images.sustainablefloristry} 
              className="w-[428px] h-[315px]"
              resizeMode="contain"
            />

            {/* Overlay container */}
            <View className="absolute inset-0 px-6 py-8 flex justify-between h-[315px]">

              {/* Header Text */}
              <View>
                <Text className="font-bold text-[26px] text-white max-w-[280px]">Sustainable Floristry</Text>

                {/* Subtitle Text */}
                <Text className="font-regular text-[12px] text-white max-w-[220px]">
                  Reducing waste and providing eco-friendly flowers for bouquets 
                </Text>
              </View>

                <View className="absolute bottom-0 right-0 items-center mb-3">
                  <CustomButton
                    title="Read now"
                    handlePress={() => router.push('/home')}
                    containerStyles=""
                    buttonStyles="bg-white rounded-[6px] justify-center items-center h-[44px] w-[213px]"
                    textStyles="text-[18px] text-black font-semibold"
                  />
                </View>
            </View>
          </View>

          {/*Shop for occasions*/}
          <LinearGradient
            colors={['#F0E3FF', '#FFFFFF']} // Define gradient colors
            start={{ x: 0, y: 0 }} // Start point for the gradient
            end={{ x: 0, y: 1 }} // End point for the gradient (vertical gradient)
            className=" h-[260px] w-full mt-5 " // Gradient container styling
          >

            <View className="flex flex-row justify-between items-center p-4">
              <Text className="font-regular text-[26px]">Shop for occasions</Text>
              <View className="flex flex-row items-center">
                <Text className="font-regular text-[12px] text-primary-200">Show More</Text>
                <Image
                  source={icons.rightarrowpurple}
                  className="w-[20px] h-[20px]"
                  resizeMode="contain"
                />
              </View>
            </View>

            <View className="flex flex-row flex-wrap justify-between px-10">
            {occasions.map((occasion, index) => (

              <TouchableOpacity
                key={index}
                className={`rounded-xl border w-[48%] h-[49px] flex justify-center items-center
                  ${index === 0 || index === 1 ? 'bg-primary' : ''}
                  ${index < 4 ? 'mb-4' : 'mb-0'}`}
              >
                
                <View className="flex flex-row justify-center px-3 items-center">
                  <Image
                  source={occasion.icon}
                  className="w-[24px] h-[24px] "
                  resizeMode='contain'
                  />
                  <Text className={`flex-1 text-[18px] text-center ${index === 0 || index === 1 ? 'text-white' : ''}`}>{ occasion.title }</Text>
                </View>
              </TouchableOpacity>

              ))}
            </View>
          </LinearGradient>

          {/*Feedback*/}
          <View className="h-[190px] w-[428px] flex flex-col justify-start items-center p-8">
            <Text className="text-[18px]">Are you enjoying the app?</Text>
            <TouchableOpacity
              className="rounded-xl border w-[167px] h-[49px] flex justify-center items-center my-5"
            >
            <Text className="text-[16px] font-semibold">Give us Feedback</Text>
            </TouchableOpacity>


            <Text className="text-[12px]">Privacy Policy | Terms of use</Text>
          </View>


        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home