import { View, Text, SafeAreaView,StyleSheet } from 'react-native'
import React from 'react'
import Header from '/home/hassan/Insta/instagram/components/home/Header.js'
import Stories from '/home/hassan/Insta/instagram/components/home/Stories.js'
import Post from '/home/hassan/Insta/instagram/components/home/Post.js'
const Homescreen = () => {  
  return (
      <SafeAreaView style={styles.container}> 
        <Header/>
        <Stories/>
        <Post/>
      </SafeAreaView> 
  )
}
const styles= StyleSheet.create({
    container:{
        backgroundColor:'black',
        flex:1,
    },
})
export default Homescreen;