import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Searchshop from '../../components/Searchshop';
import { SafeAreaView } from 'react-native-safe-area-context';

const Collections = () => {
  return (
    <SafeAreaView className="h-full">
      <ScrollView>
        <View className="w-full flex justify-start items-center min-h-[85vh] my-6">
          <Searchshop />

          





        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Collections