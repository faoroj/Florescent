import { View, Text, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { icons } from '../../assets'
import CustomButton from '../../components/CustomButton'
import SocialMediaButton from '../../components/SocialMediaButton'
import { Link, router } from 'expo-router'
import FormField from '../../components/FormField'
import * as Linking from 'expo-linking';
import { useFonts } from 'expo-font';

const SignIn = () => {

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
          <Text  className="text-4xl font-regular mt-5">Welcome Back!</Text>
          <Text  className="text-primary-100 text-2xl ml-10 mt-3">Sign in to continue</Text>

          <View className="flex flex-col items-center">

            <FormField
              value={form.username}
              placeholder="Username"
              handleChangeText={(e) => setform({ ... form, username:e })}
              otherStyles="mt-16"
              keyboardType='email-address'
            />

            <FormField
              value={form.password}
              placeholder="Password"
              handleChangeText={(e) => setform({ ... form, password:e })}
              otherStyles="mt-12"
            />

            <CustomButton
              title="Login"
              handlePress={() => router.push('/home')}
              containerStyles="w-full mt-[65px]"
              isLoading={isSubmitting}
              buttonStyles='bg-primary rounded-3xl justify-center items-center min-h-[67px]'
              textStyles="text-[28px] text-black"
            />

            <TouchableOpacity onPress={() => {/* navigate to forgot password */}}>
              <Text className="text-xs font-medium mt-3 text-primary-200">Forgot Password?</Text>
            </TouchableOpacity>

            <View className="w-screen px-1 py-2 flex flex-row justify-center items-center border-b mt-14"></View>

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