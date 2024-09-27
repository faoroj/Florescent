import { useEffect } from "react";
import { StyleSheet, Text, View } from 'react-native'
import { SplashScreen, Stack } from 'expo-router';
import { useFonts } from 'expo-font'

// SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  
    // const [fontsLoaded, error] = useFonts({
    //     "Fredoka-Bold": require("../assets/fonts/Fredoka-Bold.ttf"),
    //     "Fredoka-Light": require("../assets/fonts/Fredoka-Light.ttf"),
    //     "Fredoka-Medium": require("../assets/fonts/Fredoka-Medium.ttf"),
    //     "Fredoka-Regular": require("../assets/fonts/Fredoka-Regular.ttf"),
    //     "Fredoka-SemiBold": require("../assets/fonts/Fredoka-SemiBold.ttf"),
    // });

    // useEffect(() => {
    //   if (error) {
    //     console.error(error);
    //     return;
    //   }
    
    //     if (fontsLoaded) {
    //       SplashScreen.hideAsync();
    //     }
    //   }, [fontsLoaded, error]);
    
    //   if (!fontsLoaded) {
    //     return null;
    //   }
    
  return (
    <Stack>
        <Stack.Screen name='index' options={{ headerShown: false }} />
        <Stack.Screen name='(auth)' options={{ headerShown: false }} />
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
    </Stack>
  )
}

export default RootLayout