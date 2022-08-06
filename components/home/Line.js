import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
const Line = () => {
  return (
    <View style={styles.grayLine}>
    </View>
  )
}
const styles=StyleSheet.create({
    grayLine:{
        backgroundColor:'silver',
        height:0.10,
        width:400,
    }
})
export default Line