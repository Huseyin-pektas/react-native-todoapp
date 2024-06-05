import { StyleSheet } from "react-native";
import { colors } from "../../utils/constants";

const styles = StyleSheet.create({
headerWrapper:{
    height:50,
    width:"100%",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:colors.bgColor,
    flexDirection:"row",
    gap:10

},
textWrapper:{
    fontSize:25,
    fontWeight:"bold",
    color:colors.textColor
}
})

export default styles