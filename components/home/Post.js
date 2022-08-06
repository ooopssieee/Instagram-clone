import { View, Text,StyleSheet,ScrollView,Image,Dimensions } from 'react-native'
import React from 'react'
import {posts} from '/home/hassan/Insta/instagram/data/posts.js'
let screenWidth=Dimensions.get('window').width;
let screenHeight=Dimensions.get('window').height;
const Post = () => {
  return (
    <View>
      <ScrollView vertical
      showsVerticalScrollIndicator={false}>
        {posts.map((post,index)=>(
          <View key={index}>
            <View style={styles.bar}>
              <Image style={styles.profile}
              source={post.profile_picture}></Image>
              <Text style={styles.usernameText}>{post.user}</Text>
            </View>
              <Image style={styles.picture}
              source={post.uri}/>
            <View style={{marginTop:5,flexDirection:'row'}}>
              <Text style={styles.likeText}>{post.likes} likes</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Text style={styles.usernameText}>{post.user}</Text>
                <Text style={styles.captionText}> {post.caption}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={{marginBottom:100}}></View>
    </View>
  )
}
const styles=StyleSheet.create({
  bar:{
    flexDirection:'row',
    marginTop:10,
    marginBottom:10,
  }
  ,profile:{
    marginLeft:5,
    width:30,
    height:30,
    borderRadius:50,
    borderWidth:2,
    borderColor:'purple',
  }
  ,usernameText:{
    marginTop:5,
    color:'white',
    marginLeft:5,
    fontSize:15,
    fontWeight:'bold',
  },
  picture:{
    marginLeft:10,
    width:screenWidth,
    height:screenHeight/2,
  },
  likeText:{
    marginLeft:10,
    fontWeight:'bold',
    fontSize:13,
    color:'white',
  },captionText:{
    color:'white', 
    marginTop:5,
    fontSize:15
  }
})
export default Post

