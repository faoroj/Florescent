import { Text, View, ScrollView, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';

const RootLayout = () => {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{height: '100%'}}>
        <View>
            <Text>Florescent rocks!</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default RootLayout