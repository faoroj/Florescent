import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { images } from '../constants'; 
import CustomButton from './CustomButton'

const carouselData = [
    {
      id: '1',
      image: images.mothersday,
      header: "Happy Mother's Day!",
      content: "A mother's love is the heart of the family",
    },
    {
      id: '2',
      image: images.spring, 
      header: "Spring is here",
      content: "Check out our spring collection now!",
    },
    {
      id: '3',
      image: images.wedding,
      header: "Celebrate new love",
      content: "Check out our wedding bundle now!",
    },
  ];

const Carousel = () => {

  const renderItem = ({ item }) => (
    <View className="relative">
      <Image
        source={item.image}
        className="w-[428px] h-[225px] mt-5"
        resizeMode="cover"
      />
      <View className="absolute inset-0 flex flex-col justify-between p-10">
        <Text className="font-bold text-[18px]">{item.header}</Text>
        <Text className="font-semibold text-[12px] max-w-[180px]">
          {item.content}
        </Text>
        <CustomButton
          title="Shop now"
          handlePress={() => router.push('/home')}
          containerStyles="mt-10"
        />
      </View>
    </View>
  );

  return (
    <View className="h-[260px]">
        <FlatList
        data={carouselData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={true}
        snapToInterval={428} 
        snapToAlignment="start"
        decelerationRate="fast"
        />
    </View>
  );
};

export default Carousel;