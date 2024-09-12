import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function ItemList({ data, removerUser, editarUser }) {


    return (
        <View
            className='w-full bg-white mt-4 rounded-md'
            style={{
                shadowColor:'#121212',
                shadowOffset:{
                    width:0,
                    height:2,
                },
                shadowOpacity:0.25,
                shadowRadius:3.84,

                elevation:5
            }}
        >
            <View className='w-full justify-center items-center border-b-2 py-1'>
                <Text className='text-base font-bold'>#{data.id}</Text>
            </View>
            <View className='flex-row '>
                <View className='w-9/12 items-center justify-center'>
                    <Text className='text-base'>{data.name}</Text>
                    <Text className='text-base'>{data.email}</Text>
                </View>
                <View className='p-4 '>
                    <TouchableOpacity
                        onPress={editarUser}
                        className='border p-2 rounded-md bg-yellow-200 '
                    >
                        <MaterialCommunityIcons
                            name="pencil"
                            size={20}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={removerUser}
                        className='border p-2 rounded-md my-2 bg-red-400'
                    >
                        <MaterialCommunityIcons
                            name="trash-can"
                            size={20}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        
            )
}