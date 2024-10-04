import { View, Text, Image } from 'react-native'
import { Redirect, Tabs } from "expo-router";
import { icons } from '../../assets';

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="flex items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-sm`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};


const TabLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#A877D1",
          tabBarInactiveTintColor: "#00000",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#E8D6FF",
            borderTopWidth: 1,
            borderTopColor: "#F6F6F6",
            height: 88,
          },
        }}
      >
        {/* Home */}
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
        />

        {/* Collections */}
        <Tabs.Screen
          name="collections"
          options={{
            title: "Collections",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.collections}
                color={color}
                name="Collections"
                focused={focused}
              />
            ),
          }}
        />

        {/* Cart */}
        <Tabs.Screen
          name="cart"
          options={{
            title: "Cart",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.cart}
                color={color}
                name="Cart"
                focused={focused}
              />
            ),
          }}
        />

        {/* Profile */}
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.profile}
                color={color}
                name="Profile"
                focused={focused}
              />
            ),
          }}
        />

      </Tabs>
    </>


  )
}

export default TabLayout