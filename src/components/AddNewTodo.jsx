import React, { useState } from 'react';
import {
  StyleSheet, View, Text, TextInput, TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#000',
    marginVertical: 15,
    padding: 5,
    margin: 5,
    width: '100%',
  },
  buttonContainer: {
    backgroundColor: 'orange',
    paddingVertical: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

const AddNewTodo = ({ addTodo }) => {
  const [newTodoName, setNewTodoName] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={(text) => setNewTodoName(text)}
        value={newTodoName}
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          addTodo(newTodoName);
          setNewTodoName('');
        }}
      >
        <Text style={styles.buttonText}>Add Todo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddNewTodo;
