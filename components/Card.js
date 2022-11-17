import { StyleSheet, View } from 'react-native'
import React from 'react'

const Card = ({children, newStyles}) => {
  return (
    <View style={{ ...styles.inputContainer, ...newStyles }}>
        {children}
      
    </View>
  )
};

export default Card;

const styles = StyleSheet.create({
    inputContainer:{
        width:300,
        alignItems:'center', 
        padding:20,
        shadowColor:'black',
        textShadowOffset:{width:0, height:2},
        shadowRadius:6,
        shadowOpacity:0.5,
        elevation:5,
        borderRadius:10,
        backgroundColor:'white'


        
        
    },
});