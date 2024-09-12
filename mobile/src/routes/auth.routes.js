import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Home from "../pages/Home";
import Usuarios from "../pages/Usuarios";

const AuthStack=createNativeStackNavigator()

export default function AuthRoutes(){
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen 
                name="Home"
                component={Home}

                options={{
                    headerShown:false,

                }}
            />
            <AuthStack.Screen 
                name="Usuarios"
                component={Usuarios}

                options={{
                    headerShown:false,
                    animation:"slide_from_right"
                }}
            />
        </AuthStack.Navigator>
    )
}