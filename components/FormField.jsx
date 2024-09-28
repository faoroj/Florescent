import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { images, icons } from '../constants'

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  
  
  return (
    <View className={`${otherStyles} space-y-2`}>
      
      {title && <Text className="text-[18px] text-gray-300">{title}</Text>}

      <View className="w-[85%] px-1 py-2 flex flex-row justify-center items-center border-b">
        <TextInput
          className="text-gray-300 flex-1 text-[18px]"
          value={value}
          selectionColor="#9747FF"
          placeholder={placeholder}
          placeholderTextColor="#A0A0A0" 
          onChangeText={handleChangeText}
          secureTextEntry={(placeholder === "Password" && !showPassword)}
          {...props}
        />

        
        {placeholder === 'Password' && (
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Image
                    source={!showPassword ? icons.hidden : icons.visible} 
                    className="w-6 h-6" 
                    resizeMode="contain"
                />
            </TouchableOpacity>
        )}

      </View>
    </View>
  );
};

export default FormField;
