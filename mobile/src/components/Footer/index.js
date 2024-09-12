import React from "react";
import { View, Text } from "react-native";
import { Entypo } from '@expo/vector-icons'
export default function Footer() {
    return (
        <View className='items-end  p-2 bg-slate-50'>
            <Text className='mr-4 text-xs'>
                Desenvolvido  com <Entypo
                    name="heart"
                    size={18}
                    color='#ff0000'
                /> por <Text className='font-bold'>@RafaDev</Text>

            </Text>
        </View>
    )
}