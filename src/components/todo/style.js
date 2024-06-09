import React from "react";
import { StyleSheet } from "react-native";
import { colors } from "../../utils/constants";

const styles = StyleSheet.create({
    todosWrapper:{
        padding:20,
        borderBottomColor:colors.textSekondary,
        borderBottomWidth:1,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    title:{
        fontSize:23,
        fontWeight:"bold",
        color:colors.textColor,
        
    },
    
    linetrought:{
        color:"red",
        textDecorationLine:"line-through"
    },
    date:{
        color:"black",
        fontWeight:"bold",
        margin:10
    },
    iconwrapper:{
        flexDirection:"row",
        gap:5
    }
})
export default styles