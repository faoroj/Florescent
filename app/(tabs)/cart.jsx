import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { icons, images } from '../../assets'
import CustomButton from '../../components/CustomButton'



const Cart = () => {
  const [isSubmitting, setisSubmitting] = useState(false)
  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView>
        <View className="px-4 py-6">

          {/* Top Div "Your Order" */}
          <View className="flex flex-row justify-between items-center">
            <Text className="text-[32px] font-normal">Your Order</Text>
            <Text className="text-[12px] underline text-primary-200 font-normal">Clear Cart</Text>
          </View>

          {/* Item Container */}
          <View className="flex flex-row mt-7">

            {/* Screen Left Div */}
            <View className="flex flex-col justify-center items-center">
              <Image
                source={images.pinkdaisies} 
                className="w-[173px] h-[159px]"
                resizeMode="contain"
              />

              <View className="flex flex-row items-center gap-2 mt-1">
                <Image
                  source={icons.minus} 
                  className="w-[28px] h-[28px]"
                  resizeMode="contain"
                />
                <Text>1</Text>
                <Image
                  source={icons.plus} 
                  className="w-[28px] h-[28px]"
                  resizeMode="contain"
                  />
                </View>
            </View>

            {/* Screen Right Div */}
            <View className="flex flex-col justify-between ml-4 w-[150px]">
              <View >
                <Text className="text-[12px]" >Blushing Elegance: A Symphony of Pink Blooms</Text>
                <Text className="mt-1 ml-2 font-bold">$99.00</Text>
              </View>

              <View className="flex justify-end items-end mb-10">
                <Text className="underline text-[12px]">Remove</Text>
              </View>
            </View>


          </View>

          {/* Pay Details Container */}
          <View className="bg-gray-100 w-full h-[204px] mt-10 py-4 px-4 flex flex-col justify-evenly">

            <View className="flex flex-row justify-between items-center">
              <Text>Subtotal</Text>
              <Text>$99.00</Text>
            </View>

            <View className="flex flex-row justify-between items-center">
              <Text>Estimated Tax</Text>
              <Text>TBD</Text>
            </View>

            <View className="flex flex-row justify-between items-center">
              <Text>Shipping & Handling</Text>
              <Text className="font-black text-primary-200">FREE</Text>
            </View>

            <View className="border-b border-gray-300 w-full my-4" />

            <View className="flex flex-row justify-between items-center">
              <Text className="font-black">Estimated Total</Text>
              <Text className="font-black">$99.00</Text>
            </View>

          </View>

          {/* Checkout Button */}
          <CustomButton
              title="Checkout"
              handlePress={() => router.push('/home')}
              containerStyles="w-full mt-[25px]"
              isLoading={isSubmitting}
              buttonStyles='bg-primary rounded-3xl justify-center items-center min-h-[67px]'
              textStyles="text-[28px] text-black"
          />

          {/* Contact and Terms of Service */}
          <View className="mt-5">
            <View className="flex flex-row justify-center items-center">
              <Image
                    source={icons.phone} 
                    className="w-[22px] h-[22px]"
                    resizeMode="contain"
              />
              <Text className="text-[10px] font-regular">+1 (808) 555-0111</Text>
            </View>

            <Text className="text-center text-[10px]">By placing your order you agree to our 
              <Text className="font-bold">privacy policy</Text> and 
              <Text className="font-bold">terms of service</Text>
            </Text>
          </View>





        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Cart