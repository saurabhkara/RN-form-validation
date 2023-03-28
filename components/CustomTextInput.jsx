import { View, Text , StyleSheet, TextInput} from 'react-native'
import React from 'react'

export default function CustomTextInput({label, error, onChangeText, ...prop}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label} <Text style={styles.star}>*</Text></Text>
      <TextInput onChangeText={(value)=>onChangeText(value)} {...prop} style={styles.input}/>
      {
        error && <Text style={styles.error}>{error}</Text>
      }
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        height:90,
        width:'90%',
        alignSelf:'center',
        marginBottom:5,
    },
    label:{
        marginVertical:4
    },
    star:{
        color:'red', 
        fontSize:17
    },
    input:{
        borderColor:'black',
        borderWidth:0.5,
        height:'50%',
        paddingHorizontal:8,
        backgroundColor:'#dfdfdf',
        fontSize:17
    },
    error:{
        color:'red',
        fontSize:13
    }
})