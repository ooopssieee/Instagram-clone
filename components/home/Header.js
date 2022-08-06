import { View, Text, StatusBar,Image,StyleSheet,TouchableOpacity, Platform } from 'react-native'
import React from 'react'
const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>alert("Logged out of Instagram.")}>
        <Image style={styles.logo} 
            source={require('/home/hassan/Insta/instagram/assets/actualInstaLogo.jpg')}
        />
      </TouchableOpacity>
      <View style={styles.iconContainer}>
          <TouchableOpacity onPress={()=>alert("Opened direct messages.")}>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>11</Text>
            </View>
            <Image style={styles.icon}
            source={require('/home/hassan/Insta/instagram/assets/side.jpg')}/>
          </TouchableOpacity>
      </View>
    </View>
  )
}
const styles=StyleSheet.create({
  container:{
      justifyContent:'space-between',
      alignItems:'center',
      flexDirection:'row',
      paddingTop: Platform.OS==="android"?StatusBar.currentHeight:0,
  },  
  logo:{
    width:180,
    height:90,
    resizeMode:'contain',
    marginLeft:-20,marginTop:-15,
  },
  iconContainer:{
    flexDirection:'row',
  },icon:{
    width:100,height:100,resizeMode:'contain',marginTop:-15,
  },
  unreadBadge:{
    backgroundColor:'red',
    position:'absolute',
    left:65 ,
    bottom:60,
    width:25,
    height:18,
    borderRadius:25,
    alignItems:'center',
    justifyContent:'center',
    zIndex:100,
  },
  unreadBadgeText:{
    color:'white',
    fontWeight:'600',
  }
})
export default Header