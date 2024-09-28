import { View, Text, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images, icons } from '../../constants'
import CustomButton from '../../components/CustomButton'
import SocialMediaButton from '../../components/SocialMediaButton'
import { Link, router } from 'expo-router'
import FormField from '../../components/FormField'
import * as Linking from 'expo-linking';
import { useFonts } from 'expo-font';

const SignIn = () => {

  const { width } = Dimensions.get('window');
  const scaleFont = (size) => (width / 400) * size; 
  

  const socialMediaLinks = [
    { icon: icons.xicon, url: 'https://www.twitter.com' },
    { icon: icons.googleicon, url: 'https://www.google.com' },
    { icon: icons.facebookicon, url: 'https://www.facebook.com' }
  ];

  const [form, setform] = useState({
    username: '',
    password:''
  })

  const [isSubmitting, setisSubmitting] = useState(false)

  const submit = () => {

  }
  return (
    <SafeAreaView className="h-full">
      <ScrollView>
        <View className="w-full flex justify-start min-h-[85vh] px-4 my-6">
          <Text style={{ fontSize: scaleFont(42) }}className="text-[42px] font-regular mt-5">Welcome Back!</Text>
          <Text style={{ fontSize: scaleFont(26) }} className="text-primary-100 text-[26px] ml-10 mt-3">Sign in to continue</Text>

          <View className="flex flex-col items-center">

            <FormField
              value={form.username}
              placeholder="Username"
              handleChangeText={(e) => setform({ ... form, username:e })}
              otherStyles="mt-[70px]"
              keyboardType='email-address'
            />

            <FormField
              value={form.password}
              placeholder="Password"
              handleChangeText={(e) => setform({ ... form, password:e })}
              otherStyles="mt-[50px]"
            />

            <CustomButton
              title="Login"
              handlePress={submit}
              containerStyles="w-full mt-[65px]"
              isLoading={isSubmitting}
            />

            <TouchableOpacity onPress={() => {/* navigate to forgot password */}}>
              <Text className="text-[12px] font-medium mt-3 text-primary-200">Forgot Password?</Text>
            </TouchableOpacity>

            <View className="w-screen px-1 py-2 flex flex-row justify-center items-center border-b mt-[60px]"></View>

            <View className="flex flex-row w-full justify-around items-center mt-8">
              {socialMediaLinks.map((item, index) => (
                <SocialMediaButton key={index} iconSource={item.icon} url={item.url}/>
              ))}
            </View>
            
            <View className="flex flex-row justify-center items-center mt-4">
              <Text className="text-black">Don't have an account?</Text>
                <TouchableOpacity onPress={() => router.push('/sign-up')}>
                  <Text className="text-primary-200 font-semibold"> Sign up now!</Text>
                </TouchableOpacity>
            </View>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn