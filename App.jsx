import React from "react";
import { StyleSheet, View } from "react-native";
import Navbar from "./src/components/Navbar";
import TodoList from './src/components/TodoList'
import ThemeContextProvider from './src/context/ThemeContext'
import AuthenticationContextProvider from './src/context/AuthenticationContext';
import TodoListContextProvider from './src/context/TodoListContext'

const App = () => {
  return (
    <View>
      <TodoListContextProvider>
        <AuthenticationContextProvider>
          <ThemeContextProvider>
            <Navbar />
            <TodoList />
          </ThemeContextProvider>
        </AuthenticationContextProvider>
      </TodoListContextProvider>
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
