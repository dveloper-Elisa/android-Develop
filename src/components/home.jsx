import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import tw from "twrnc"
import { useNavigation } from '@react-navigation/native'

export default function Home() {

const navigation = useNavigation()


  return (
    <View style={tw`bg-slate-800 items-center`}>
      <Text style={tw`text-white`}>Home Screen</Text>
      <TextInput placeholder='Enter your name'  style={tw`border-2 p-3`}/>
      <TextInput placeholder='Enter email'  style={tw`border-2 p-3`}/>
      <Text style={tw`text-yellow-300`}>If have account please Login <Text onPress={navigation.navigate("Login")} style={tw`text-green-600`}>Here</Text></Text>
    </View>
  )
}

const styles = StyleSheet.create({})