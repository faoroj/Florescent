import { Text, View, ScrollView, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';

const RootLayout = () => {
  return (
    <SafeAreaView className="h-full">
      <ScrollView contentContainerStyle={{height: '100%'}}>
        <View className="w-full flex justify-center min-h-[85vh] items-center px-4">
          
          <Image
            source={images.loginimage}
            className="w-[6008px] h-[490px]"
            resizeMode='contain'
          />
          

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default RootLayout