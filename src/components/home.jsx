import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import tw from "twrnc"

export default function Home() {
  return (
    <View style={tw`bg-slate-800 items-center`}>
      <Text style={tw`text-white`}>Home Screen</Text>
      <TextInput placeholder='Enter your name' style={tw`border-2 p-3`}/>
    </View>
  )
}

const styles = StyleSheet.create({})