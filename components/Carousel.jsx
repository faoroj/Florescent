import React, {useState} from 'react';
import { View, Text, Image, FlatList, Dimensions } from 'react-native';
import { images } from '../assets'; 
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

const screenWidth = Dimensions.get('window').width;


const Carousel = () => {

  const [activeIndex, setActiveIndex] = useState(0);
  const handleScroll = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(offsetX / screenWidth);
    setActiveIndex(currentIndex);
  };


  const renderItem = ({ item }) => (
    <View className="relative">
      <Image
        source={item.image}
        className="w-[428px] h-[225px]"
        resizeMode="cover"
      />
      <View className="absolute inset-0 flex flex-col justify-between py-6 px-3">
        <Text className="font-bold text-[18px]">{item.header}</Text>
        <Text className="font-semibold text-[12px] max-w-[180px]">
          {item.content}
        </Text>
        <CustomButton
          title="Shop now"
          handlePress={() => router.push('/home')}
          containerStyles="mt-20 ml-5"
          buttonStyles="bg-primary rounded-[6px] justify-center items-center h-[33px] w-[123px]"
          textStyles="text-[14px] text-white font-semibold"
        />
      </View>
    </View>
  );

  return (
    <View>
      {/* Carousel */}
      <View className="h-[250px]">
          <FlatList
          data={carouselData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={428} 
          snapToAlignment="start"
          decelerationRate="fast"
          onScroll={handleScroll}
          scrollEventThrottle={16} // Reduces lag when scrolling
          />
      </View>
      
      {/* Carousel Indicators */}
      <View className='flex flex-row justify-center items-center gap-2'>
        {carouselData.map((_, index) => (
            <View
              key={index}
              className={`rounded-full h-[8px] w-[8px] ${
                activeIndex === index ? 'bg-primary-200' : 'bg-gray-300'
              }`}
            />
          ))}
      </View>

    </View>


  );
};

export default Carousel;