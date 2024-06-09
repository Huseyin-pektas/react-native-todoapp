import { StyleSheet } from "react-native";
import { colors } from "../../utils/constants";


const styles = StyleSheet.create({
    modalContainer:{
        flex:1,
        // backgroundColor:"#f0f2ef",
        justifyContent:"center",
        alignItems:"center"
    },
    modalContentWrapper:{
        backgroundColor:colors.textSekondary,
        width:"80%",
        padding:20,
        borderRadius:5
    },
    title:{
        color:colors.textColor,
        fontSize:20,
        fontWeight:"bold",
        textAlign:"center"
    },
    ModalButtonWrapper:{
        flexDirection:"row",
        justifyContent:"space-around"
    },
    closebuttonWrapper:{
        borderRadius:4,
        backgroundColor:"white",
        paddingHorizontal:25,
        paddingVertical:9,
        margin:6,
        borderWidth:2,
        borderColor:"red"
    },
    closebuttonText:{
        color:"red",
        fontSize:15,
        fontWeight:"bold"
    },
    confirmbuttonWrapper:{
        borderRadius:4,
        backgroundColor:"green",
        paddingHorizontal:25,
        paddingVertical:9,
        margin:6,
        borderWidth:2,
        borderColor:"green"
    },
    confirmbuttonText:{
        color:"white",
        fontSize:15,
        fontWeight:"bold"
    },
    ValidationError:{
        textAlign:"center",
        color:"red",
        marginBottom:10,

    }
})
export default styles