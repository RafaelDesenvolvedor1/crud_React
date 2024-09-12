import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { FontAwesome6 } from '@expo/vector-icons'

import { useNavigation } from '@react-navigation/native'

export default function LinkItem({ text, icon, href }) {
    const nav = useNavigation()
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={
                ()=>nav.navigate(href)
            }
            className='flex-row justify-center items-center gap-2 flex-1 '>
            <FontAwesome6
                name={icon}
                color='#121212'
                size={25}

            />
            <Text className='text-base font-bold'>{text}</Text>

        </TouchableOpacity>
    )
}