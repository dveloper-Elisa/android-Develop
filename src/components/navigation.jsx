import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import tw from "twrnc"



export default function BootomNavigation() {
    const bottom = createBottomTabNavigator();

    const MyName = ()=>{
        return (
            <View style={tw`tex-center items-center`}>
                <Text>Welcome to my Name</Text>
            </View>
        )
    }
    const Age = ()=>{
        return (
            <View style={tw`tex-center items-center`}>
                <Text>Welcome to my Age Page</Text>
            </View>
        )
    }



  return (
    <bottom.Navigator>
        <bottom.Screen name ="Name" component={MyName}/>
        <bottom.Screen name ="Age" component={Age}/>
    </bottom.Navigator>
  )
}

// export default BootomNavigation