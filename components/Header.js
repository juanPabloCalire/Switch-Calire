import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../constants/colors';


const Header = ({title, newStyles}) => {
  return (
    <View style={styles.header}>
      <Text style={{ ...styles.headerTitle, ...newStyles }}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
    header:{
        backgroundColor:colors.secondary,
        height: 90,
        paddingTop:36,
        alignItems:'center',
        justifyContent: 'center'
    },
    headerTitle:{
        color: colors.white,
        fontSize:30,
        
    },
});