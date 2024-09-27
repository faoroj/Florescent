import { View, Text, TextInput } from 'react-native';
import React from 'react';

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
  return (
    <View className={`${otherStyles} space-y-2`}>
      
      {title && <Text className="text-[18px] text-gray-300">{title}</Text>}

      <View className="w-[85%] px-1 py-2 flex flex-row justify-center items-center border-b border-gray-400">
        <TextInput
          className="text-gray-300 flex-1 text-[18px]"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#A0A0A0" 
          onChangeText={handleChangeText}
          {...props}
        />
      </View>
    </View>
  );
};

export default FormField;
