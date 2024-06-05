/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{useState} from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Header from './src/components/header';
import generalStyles from "./src/utils/generalStyle"
import Icon from 'react-native-vector-icons/dist/AntDesign';
import Input from './src/components/input';
import { colors } from './src/utils/constants';
import Todo from './src/components/todo';


function App () {
  const [text, setText] = useState ("")
  const [todos, setTodos] = useState([])
  const addTodo =()=> {
    const NewTodo = {
      id: String(new Date().getTime()),
      text: text,
      date:new Date(),
      complated:true
    }
    setTodos([...todos,NewTodo])
    setText("")
  }

  return (
    <SafeAreaView style={[generalStyles.body,generalStyles.bgWhite]} >
      <Header  title="My Todo App"/>
      {/* <Icon name ="forward" size ={25} color="red"/> */}
      <Input 
      onPressIcon={addTodo}
       value={text} 
       onChangeText={(text)=>{setText(text)}}
       hasIcon 
       placeholder='Adınızı yazınız'/>
        <View style={styles.todosWrapper}>
         {
          todos.length === 0 ? (
            <View style={{flexDirection:"row", gap:10}}>
              <Icon name= "forward" size ={25} color={colors.textPrimary}/>
            <Text style={styles.emptyText}>
          Burada henuz yapılacak bir todo yoktur.
          Yapılacak todo olursa listeleme yapılacaktır.
         </Text>
            </View>
          ):(
            <ScrollView style={styles.ScrollView}>
            {todos?.map(todo =>(<Todo key={todo?.id} todo={todo}/>))}
          </ScrollView>
          )}

        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  todosWrapper:{
    marginHorizontal:20,
    marginVertical:10,
    flex:1,
    //borderWidth:1
  },
  emptyText:{
    fontSize:20,
    fontWeight:"bold",
    textAlign:"center",
    color:colors.textColor
  },
  ScrollView:{
    flexGrow:1,
  }
})

export default App;
