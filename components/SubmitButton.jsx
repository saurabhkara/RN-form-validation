import { Text, TouchableOpacity , StyleSheet} from 'react-native'
import React from 'react';
import {useNavigation} from '@react-navigation/native'

export default function SubmitButton({onPress}) {

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={{fontSize:18}}>Submit</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:'cyan',
        height:45,
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        marginBottom:20,
        width:100,
        alignSelf:'center',
        borderRadius:6
    }
})