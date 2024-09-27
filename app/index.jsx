import { Text, View, ScrollView, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images, icons } from '../constants';
import CustomButton from '../components/CustomButton';

const RootLayout = () => {
  return (
    <SafeAreaView className="h-full">
      <ScrollView contentContainerStyle={{height: '100%'}}>
      
        <View className="w-full flex justify-center min-h-[75vh] items-center px-4">
          <Image
            source={images.loginimage}
            className="w-[428px] h-[390px]"
            resizeMode='contain'
          />

          <CustomButton 
            title="Login"
            handlePress={() => router.push('/sign-in')}
            containerStyles="w-full mt-7 "
          />

          <CustomButton 
            title="Create Account"
            handlePress={() => router.push('/sign-up')}
            containerStyles="w-full mt-7"
            variant="outline"
          />

          <View className="flex flex-row justify-center items-center">
            <Text>English United States</Text>
            <Image
              source={icons.downarrowblack}
              className="mt-7 w-[19px] h-[21px]"
              resizeMode="contain"
            />
          </View>

          <CustomButton 
            title="Continue as guest"
            handlePress={() => router.push('/sign-up')}
            containerStyles="w-[75%] mt-[60px] mb-[80px]"
            variant="outline"
          />

        
          

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default RootLayout