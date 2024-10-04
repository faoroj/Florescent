import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { icons, images } from '../../assets'

const Profile = () => {
  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView>
        <View className="px-4 py-6">

          {/* Profile */}
          <View className="flex justify-center items-center">
            <Text className="text-[30px]">Profile</Text>
          </View>

          <View className="border-b border-gray-300 w-screen my-4 -mx-4"/>

          <View className="flex justify-center items-center">

            {/* Profile Image */}
            <Image
              source={images.emilia} 
              className="w-[124px] h-[124px] rounded-full"
              resizeMode="contain"
            />

            {/* Username */}
            <Text className="text-[22px] mt-3">Emilia Delaney</Text>

            <View className="flex flex-row mt-4">

              {/* SL Icon Div */}
              <View className="rounded-full bg-primary w-[67px] h-[67px]" style={{ opacity: 0.35 }}></View>

              {/* SR Box */}
              <View className="flex flex-row">

                <View className="w-[307px] h-[67px] bg-gray-100 py-2 px-2">
                  <Text className="text-[22px]">Your Orders</Text>
                  <Text className="text-[14px]">View Your Previous Orders</Text>
                </View>

                <View className="flex justify-center items-center">
                  <Image
                    source={icons.rightarrowpurple} 
                    className="w-[23px] h-[26px] rounded-full"
                    resizeMode="contain"
                  />
                </View>

              </View>

            </View>

          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile