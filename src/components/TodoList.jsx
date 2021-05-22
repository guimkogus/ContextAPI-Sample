import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { ThemeContext } from '../context/ThemeContext';
import { TodoListContext } from '../context/TodoListContext'
import AddNewTodo from './AddNewTodo'

const TodoList = () => {
  const { isDarkTheme, darkTheme, lightTheme, toggleIsDarkTheme } = useContext(ThemeContext);
  const { todos, dispatch } = useContext(TodoListContext);
  const theme = isDarkTheme ? darkTheme : lightTheme;

  const { todoContainer, itemText, buttonContainer, buttonText } = styles;

  return (
    <View style={[todoContainer, theme]}>
      {todos.length > 0 ? (
        <FlatList 
        data={todos} 
        keyExtractor={(todo) => todo.id}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => dispatch({type: 'REMOVE_TODO', payload: {id: item.id}})}>
            <Text style={[itemText, theme]}>{item.text}</Text> 
          </TouchableOpacity>
        )}
      />
      ) : (
        <Text style={[itemText, theme]}>You have no todos</Text>
      )}
      

      <AddNewTodo addTodo={(newTodoText) => dispatch({type: 'ADD_TODO', payload: {text: newTodoText}})} />

      <TouchableOpacity style={buttonContainer} onPress={toggleIsDarkTheme}>
        <Text style={buttonText}>Change Theme</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  todoContainer: {
    backgroundColor: "#aaa",
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  itemText: {
      color: '#fff',
      fontSize: 18,
      paddingVertical: 10
  },
  buttonContainer: {
    backgroundColor: 'dodgerblue',
    paddingVertical: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18
  }
});

export default TodoList;
