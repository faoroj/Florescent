import { useEffect } from "react";
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';


export default function RootLayout() {
  
  return (
    <Stack>
        <Stack.Screen name='index' options={{ headerShown: false }} />
        <Stack.Screen name='(auth)' options={{ headerShown: false }} />
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
    </Stack>
  )
}

