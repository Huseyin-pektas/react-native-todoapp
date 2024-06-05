import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/dist/AntDesign';



const Todo = ({ todo = {} }) => {
  return (
    <View style={styles.todosWrapper}>
      <View >
        <Text style={styles.title}>{todo?.text}</Text>
        <Text style={styles.date}>{new Date(todo?.date).toLocaleString("tr-TR")}</Text>
      </View>
      <View style={styles.iconwrapper} >
        <TouchableOpacity>
          <Icon name="delete" size={25} color="red" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="edit" size={25} color="orange" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name={todo?.complated === true ? "checkcircleo":"checkcircle"} size={25} color="green" />
        </TouchableOpacity>


      </View>
    </View>
  );
}

export default Todo;
