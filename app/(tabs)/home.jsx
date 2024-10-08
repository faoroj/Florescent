import { View, Text, ScrollView, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Searchshop from '../../components/Searchshop';
import { images, icons } from '../../assets'
import { occasions, bestdeals } from '../../constants';
import CustomButton from '../../components/CustomButton'
import { router } from 'expo-router'
import {LinearGradient} from 'expo-linear-gradient';
import Carousel from '../../components/Carousel';


const Home = () => {

  return (
    <SafeAreaView className="h-full bg-white">

      <View className="w-full flex justify-start items-center my-6">
        {/* Search Bar */}
        <Searchshop />
      </View>

      <ScrollView>
        <View className="w-full flex justify-center items-center min-h-[85vh]">



          <View className="relative w-full"> 
            <Carousel />
          </View>

          {/*Best Deals Section */}
          <LinearGradient
            colors={['#F0E3FF', '#FFFFFF']} // Define gradient colors
            start={{ x: 0, y: 0 }} // Start point for the gradient
            end={{ x: 0, y: 1 }} // End point for the gradient (vertical gradient)
            className=" h-[260px] w-full mt-7 " // Gradient container styling
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


            <View className="pl-4 flex flex-row justify-start items-center">
            {bestdeals.map((deal, index) => (
              <View className="flex flex-col">
                <Image 
                  source={deal.image}
                  className="w-[137px] h-[127px]"
                  resizeMode='contain'
                />
                <View>
                  <Text className="text-[14px]">{deal.title}</Text>
                  <Text className="text-[12px]">Starting from 
                    <Text className="text-[10px] font-regular text-primary-200"> $</Text>
                    <Text className="text-[14px] font-bold text-primary-200">99</Text>
                  </Text>
                </View>
              </View>
            ))}
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
          
            <ImageBackground
              source={images.sustainablefloristry} 
              className="w-full h-[315px] flex items-center justify-between"
              resizeMode="cover"
            >
              <View className="max-w-[250px] gap-y-5 ml-[100px] mt-1">
                <Text className="font-bold text-[26px] text-white">Sustainable Floristry</Text>
                <Text className="font-regular text-[12px] text-white">
                    Reducing waste and providing eco-friendly flowers for bouquets 
                </Text>
              </View>

              <CustomButton
                title="Read now"
                handlePress={() => router.push('/home')}
                containerStyles="mb-5"
                buttonStyles="bg-white rounded-[6px] justify-center items-center h-[44px] w-[213px]"
                textStyles="text-[18px] text-black font-semibold"
              />              
            </ImageBackground>

            {/* Overlay container */}
            {/* <View className="absolute inset-0 px-6 py-16 flex justify-between h-[315px] flex-col items-center"> */}

              {/* Header Text */}
              {/* <View className="">
                <Text className="font-bold text-[26px] text-white">Sustainable Floristry</Text> */}

                {/* Subtitle Text */}
                {/* <Text className="font-regular text-[12px] text-white mt-4 max-w-[220px]">
                  Reducing waste and providing eco-friendly flowers for bouquets 
                </Text>
              </View> */}

                {/* <View className="w-full flex justify-center items-center">
                  <CustomButton
                    title="Read now"
                    handlePress={() => router.push('/home')}
                    containerStyles=""
                    buttonStyles="bg-white rounded-[6px] justify-center items-center h-[44px] w-[213px]"
                    textStyles="text-[18px] text-black font-semibold"
                  />
                </View> */}
            {/* </View> */}
          

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
          <View className="h-[190px] w-[428px] bg-gray-100 flex flex-col justify-start items-center p-8">
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