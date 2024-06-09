import React,{useState} from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import EditModal from '../editModal';


//ilk harf büyük ve diğer harfler küçük yapma fonksiyonu
const Capitalize =(string)=>{
if (typeof string !== "string") return "";
return string.charAt(0).toUpperCase()+ string.slice(1).toLowerCase();
}

const Todo = ({ todo = {}, index, todos = [], setTodos = () => { } }) => {
  
  const [openmModal, setOpenModal] = useState(false)
  const [willEditText, setWillEditText] = useState(todo.text)
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  
  //burada silmek için yeni bir donksiyon yazıyoruz
  const deleteTodos = (id) => {
    Alert.alert("Silme İşlemi",
      `${todo?.id} id'li ve ${index + 1} 
     numaralı işlemi 
     silmek istediğinize emin misiniz?`,

      [
        {
          text:"Vazgeç"
        },
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

  const EditTodo =()=>{
    // kontrol işlemi

    if (willEditText === "") {
      setHasError(true)
      setErrorMessage("* Text alanı boş bırakılamaz")
      setTimeout(() => {
        setHasError(false)
        setErrorMessage("")
      }, 2000);
      return
    }
    const tempArray =[]
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id !== todo.id) {
        tempArray.push(todos[i]);
      }else{
        const updateTodo ={
          ...todo,
          text:willEditText
        }
        tempArray.push(updateTodo)
      }
    }
    setTodos(tempArray)
    setOpenModal(false)
  }
  return (
    <View style={styles.todosWrapper}>
      <View >
        <Text style={[styles.title,todo?.complated &&  styles.linetrought]}>
          {` ${index + 1}) ${Capitalize(todo?.text)}`}</Text>
        <Text style={styles.date}>{new Date(todo?.date).toLocaleString("tr-TR")}</Text>
      </View>
      <View style={styles.iconwrapper} >
        <TouchableOpacity onPress={deleteTodos}>
          <Icon name="delete" size={25} color="red" />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setOpenModal(true)} >
          <Icon name="edit" size={25} color="orange" />
        </TouchableOpacity>
        <TouchableOpacity onPress={changeComplated}>
          <Icon name={todo?.complated === true ? "checkcircle" : "checkcircleo"} size={25} color="green" />
        </TouchableOpacity>
      </View>
      <EditModal
      hasError={hasError}
      errorMessage={errorMessage}
      onConfirm={EditTodo}
       willEditText={willEditText} 
       setWillEditText={setWillEditText} 
       visible={openmModal} 
       closeMadal={()=>{setOpenModal(false)}} 
       transparent/>
    </View>
  );
}

export default Todo;
