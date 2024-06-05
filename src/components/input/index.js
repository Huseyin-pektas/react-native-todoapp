import React ,{useState} from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./style";
import Icon from 'react-native-vector-icons/dist/AntDesign';
 

const Input = ({
    placeholder = "",
    keyboardType = "default",
    muliline = false,
    hasIcon = false,
    iconName = "pluscircle",
    onPressIcon =()=> { },
    value = "",
    onChangeText =()=>{}
}) => {

    return (
        <View style={styles.inputText}>
            <TextInput
                style={styles.ınput}
                placeholder={placeholder}
                value={value}
                keyboardType={keyboardType}
                multiline={muliline}
                onChangeText={onChangeText} />
            {/* burada hasIcon u koşula bağladık */}
            {hasIcon && (
                <TouchableOpacity onPress={onPressIcon}>
                    <Icon name="pluscircle" style={styles.icon} />
                </TouchableOpacity>
            )}
        </View>
    )
}
export default Input