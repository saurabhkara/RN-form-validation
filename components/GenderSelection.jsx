import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'

export default function GenderSelection() {
  return (
    <View style={{width:'100%', backgroundColor:'red',zIndex:1}}>
        <TouchableOpacity>
            <Text>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text>Female</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text>Others</Text>
        </TouchableOpacity>
    </View>
  )
}