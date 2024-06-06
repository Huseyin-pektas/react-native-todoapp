import React from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/dist/AntDesign';



const Todo = ({ todo = {}, index, todos = [], setTodos = () => { } }) => {
  //burada silmek için yeni bir donksiyon yazıyoruz
  const deleteTodos = (id) => {
    Alert.alert("Silme İşlemi",
      `${todo?.id} id'li ve ${index + 1} 
     numaralı işlemi 
     silmek istediğinize emin misiniz?`,

      [
        {
          text: 'Sil',
          onPress: () => {
            const gecici = todos.filter(item => item.id !== todo.id)
            setTodos(gecici)
          },
          style: "destructive",

        },
      ]
    )
  }
  const changeComplated = () => {
    Alert.alert("Tamamlandı İşlemi",
      `${todo?.id} id'li ve ${index + 1} 
    numaralı işlemi 
    Yapıldı olarak kabul ediyor musunuz?`, [
      {
        text: "Vazgeç"
      },
      {
        text: "Tamamlandı",
        onPress: () => {
          const tempArray = []
          for (let i = 0; i < todos.length; i++) {
            if (todos[i].id !== todo.id) {
              tempArray.push(todos[i])
            } else {
              const newTodo = {
                ...todo,
                complated: !todo.complated
              }
              tempArray.push(newTodo)
            };
            setTodos(tempArray);

            Alert.alert(
              "Başarılı!",
              "Yaptığın işlem başarıyla tamamlanmıştır.",
              [{ text: "Tamam" }]
            );
          };
        },
      }
    ])
  }
  return (
    <View style={styles.todosWrapper}>
      <View >
        <Text style={styles.title}>{`${index + 1}) ${todo?.text}`}</Text>
        <Text style={styles.date}>{new Date(todo?.date).toLocaleString("tr-TR")}</Text>
      </View>
      <View style={styles.iconwrapper} >
        <TouchableOpacity onPress={deleteTodos}>
          <Icon name="delete" size={25} color="red" />
        </TouchableOpacity>
        <TouchableOpacity >
          <Icon name="edit" size={25} color="orange" />
        </TouchableOpacity>
        <TouchableOpacity onPress={changeComplated}>
          <Icon name={todo?.complated === true ? "checkcircle" : "checkcircleo"} size={25} color="green" />
        </TouchableOpacity>


      </View>
    </View>
  );
}

export default Todo;
