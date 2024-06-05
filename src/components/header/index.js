import React from 'react';
import { Text, View } from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/dist/AntDesign';


const Header = ({title =""}) => {
  return (
   <View style={styles.headerWrapper}>
    <Icon name="heart" size ={30} color ="crimson"/>
    <Text style={styles.textWrapper}>{title}</Text>
    <Icon name="heart" size ={30} color ="crimson"/>
   </View>
  );
}

export default Header;
