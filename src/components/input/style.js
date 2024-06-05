import React from "react";
import { StyleSheet } from "react-native";
import { colors } from "../../utils/constants";


const styles = StyleSheet.create({
inputText:{
marginHorizontal:20,
marginVertical:10,
flexDirection:'row',
alignItems:"center"
},
ınput:{
    flex:1,
    borderWidth:2,
    paddingHorizontal:8,
    paddingVertical:10,
    borderColor:"blue",
    borderRadius:7,
    backgroundColor:colors.textSekondary,
},
icon:{
    fontSize:35,
    color:"blue",
    marginLeft:10
    
}
})

export default styles