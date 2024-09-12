import React, { useState } from "react";
import { TextInput, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons'

export default function Input(props) {
    return (
        <View className='flex-row bg-slate-200 w-11/12 rounded-xl overflow-hidden h-10 my-5 border-2 border-slate-400'>

            <View className='flex-none w-10 items-center justify-center pl-2 '>
                <FontAwesome name={props.icon} size={30} color="black" />
            </View>

            <TextInput
                className='flex-1 bg-slate-50 pl-2 ml-2 '
                placeholderTextColor='#121212'
                placeholder={props.placeholder}
                value={props.value}
                onChangeText={props.event}
            />
        </View>
    )
}