import React from "react";
import { View, Image} from "react-native";

export default function Header(){
    return(
        <View className='bg-slate-400 items-center justify-center border-b-2 border-b-slate-500'>
            <Image source={require('../../assets/img/logo.png')} className='w-80'resizeMode="contain" />
        </View>
    )
}