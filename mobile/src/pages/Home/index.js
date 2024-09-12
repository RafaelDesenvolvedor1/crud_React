import React from "react";
import { View, Text } from "react-native";

export default function Home(){
    return(
        <View className='bg-slate-200 flex-1 items-center p-4'>
           <View className='bg-white w-full py-4 px-6'
            style={{
                shadowColor:'#000',
                shadowOffset:{
                    width:0,
                    height:3
                },
                shadowOpacity:0.27,
                shadowRadius:4.65,

                elevation:20
           }}>
                <Text className='text-5xl'>Bem Vindo!</Text>

                <View className='w-full bg-slate-700 h-1 rounded-md'/>

                <Text className='mb-0 mt-2'> Sistema para exemplificar a construção de um cadastro desenvolvido em ReactNative!</Text>
           </View>
        </View>
    )
}