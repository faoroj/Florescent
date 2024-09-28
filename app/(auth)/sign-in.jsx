import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images, icons } from '../../constants'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'
import FormField from '../../components/FormField'
import * as Linking from 'expo-linking';

const SignIn = () => {

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
          <Text className="text-[42px] font-regular mt-5">Welcome Back!</Text>
          <Text className="text-primary-100 text-[26px] ml-10 mt-3">Sign in to continue</Text>

          <View className="flex flex-col items-center">

            <FormField
              value={form.username}
              placeholder="Username"
              handleChangeText={(text) => setform(text)}
              otherStyles="mt-[90px]"
            />

            <FormField
              value={form.password}
              placeholder="Password"
              handleChangeText={(text) => setform(text)}
              otherStyles="mt-[50px]"
            />

            <CustomButton
              title="Login"
              handlePress={submit}
              containerStyles="w-full mt-[65px]"
              isLoading={isSubmitting}
            />

            <Text className="text-[12px] font-medium mt-3">Forgot Password?</Text>

            <View className="w-screen px-1 py-2 flex flex-row justify-center items-center border-b mt-[60px]"></View>

            <View className="flex flex-row w-full justify-evenly items-center mt-9">

              <TouchableOpacity onPress={() => Linking.openURL('https://www.twitter.com')}>
                <Image
                  source={icons.xicon}
                  className="w-[41px] h-[47px]"
                  resizeMode='contain'
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => Linking.openURL('https://www.google.com')}>
                <Image
                  source={icons.googleicon}
                  className="w-[41px] h-[47px]"
                  resizeMode='contain'
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com')}>
                <Image
                  source={icons.facebookicon}
                  className="w-[41px] h-[47px]"
                  resizeMode='contain'
                />
              </TouchableOpacity>

            </View>

            <Text className="mt-3">Don't have an account? <Text className="text-primary-200 font-semibold">Sign up now!</Text></Text>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn