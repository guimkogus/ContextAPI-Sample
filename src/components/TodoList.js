import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TodoList = () => {
  const { todoContainer, item } = styles;

  return (
    <View style={todoContainer}>
      <Text style={item}>Uberização</Text>
      <Text style={item}>Deep Link</Text>
      <Text style={item}>QR Code Scanning</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  todoContainer: {
    backgroundColor: "#aaa",
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  item: {
      color: '#fff',
      fontSize: 18,
      paddingVertical: 10
  },
});

export default TodoList;
