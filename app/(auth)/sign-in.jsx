import { View, Text, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'

const SignIn = () => {

  const [form, setform] = useState({
    email: '',
    password:''
  })

  const [isSubmitting, setisSubmitting] = useState(false)

  const submit = () => {

  }
  return (
    <SafeAreaView className="h-full">
      <ScrollView>
        <View className="w-full flex justify-start min-h-[85vh] px-4 my-6">
          <Text className="text-[42px] font-regular">Welcome Back!</Text>
          <Text className="text-primary-100 text-[26px]">Sign in to continue</Text>





        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn