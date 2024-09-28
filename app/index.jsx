import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images, icons } from '../constants';
import CustomButton from '../components/CustomButton';
import { useFonts } from 'expo-font';

const RootLayout = () => {
  const [fontsLoaded] = useFonts({
    "Fredoka-Medium": require("../assets/fonts/Fredoka-Medium.ttf"),
  });
  
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

          <View className="flex flex-row justify-center items-center mt-4">
            <Text style={{ fontFamily: 'Fredoka-Medium', fontSize: 12 }}>English ({'United States'})</Text>
            <Image
              source={icons.downarrowblack}
              className="w-[19px] h-[21px]"
              resizeMode="contain"
            />
          </View>

          <View className="w-[251px] h-[54px] rounded-xl bg-white justify-center items-center mt-10"        
            style={{
            shadowColor: 'black', 
            shadowOpacity: 0.45,  
            shadowOffset: { width: 0, height: 1 }, 
            shadowRadius: 4, 
            elevation: 4, 
            }}>
            <TouchableOpacity onPress={() => {/* navigate to forgot password */}}>
              <Text style={{ fontFamily: 'Fredoka-Medium', fontSize: 20 }}>Continue as guest</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
      <StatusBar backgroundColor='white' barStyle='dark-content'/>
    </SafeAreaView>
  )
}

export default RootLayout