import { StyleSheet } from "react-native";
import { colors } from "./constants";

const generalStyles = StyleSheet.create({
    body:{
        flex:1,
        borderWidth:2,
        borderColor:"red"
    },
    bgWhite:{
        backgroundColor:colors.white
    }
})
export default generalStyles