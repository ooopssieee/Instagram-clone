import { View, Text, ScrollView, StyleSheet, Image} from 'react-native'
import React from 'react'
import { users } from '/home/hassan/Insta/instagram/data/users.js'
const Stories = () => {
  return(
    <View style={{marginBottom:13}}>
        <ScrollView horizontal 
        showsHorizontalScrollIndicator={false}>
        {users.map((story,index)=>(
            <View key={index}>
            <Image style={styles.story} source={story.uri}></Image>
            <Text style={styles.storyText}>{
                story.user.length > 9 ? story.user.slice(0,8).toLowerCase()+'...'
                :story.user.toLowerCase()
                }</Text>
            </View>
        ))}
        </ScrollView>
    </View>
  )
}

const styles=StyleSheet.create({
    story:{
        width:70,   
        height:70,
        borderWidth:2   ,
        borderColor:'orange',
        marginLeft:6,
        borderRadius:50,
    },storyText:{
        color:'white',
        marginLeft:6,
        textAlign:'center',
        fontSize:12,
    }
})
export default Stories
