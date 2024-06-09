import React from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import Input from "../input";
const EditModal = ({
    visible,
    hasError,
    errorMessage,
    closeMadal,
    willEditText,
    setWillEditText,
    onConfirm }) => {
    return (
        <Modal visible={visible} transparent >
            <View style={styles.modalContainer}>
                <View style={styles.modalContentWrapper}>
                    <Text style={styles.title} >Güncelle</Text>
                    <Input
                        value={willEditText}
                        placeholder="Güncellenecek texti yazın"
                        onChangeText={(text) => setWillEditText(text)} />

                    {
                        hasError && (
                            <Text style={styles.ValidationError} >{errorMessage}</Text>
                        )
                    }
                    <View style={styles.ModalButtonWrapper}>
                        <TouchableOpacity style={styles.closebuttonWrapper} onPress={closeMadal}>
                            <Text style={styles.closebuttonText} >Vazgeç</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={onConfirm} style={styles.confirmbuttonWrapper} >
                            <Text style={styles.confirmbuttonText} >Onayla</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default EditModal