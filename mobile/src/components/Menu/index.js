import React from "react";
import { View, Text } from "react-native";
import LinkItem from "./LinkItem";

export default function Menu(){
    return(
        <View 
        style={{
            shadowColor:'#000',
            shadowOffset:{
                width:0,
                height:3
            },
            shadowOpacity:0.27,
            shadowRadius:4.65,

            elevation:6
       }}
        className='flex-row justify-around items-center py-4 bg-slate-400'>
            <LinkItem 
                text='Inicio'
                icon='house'
                href='Home'
            />
            <LinkItem 
                text='Usuários'
                icon='user-large'
                href='Usuarios'
            />
        </View>
    )
}