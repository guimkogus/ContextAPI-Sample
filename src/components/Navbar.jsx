import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ThemeContext } from '../context/ThemeContext';
import { AuthenticationContext } from '../context/AuthenticationContext'

const Navbar = () => {
  const { isDarkTheme, darkTheme, lightTheme } = useContext(ThemeContext);
  const {isLoggedIn, toggleAuthStatus} = useContext(AuthenticationContext);

  const theme = isDarkTheme ? darkTheme : lightTheme;

  const { headerContainer, headerText, headerTabContainer, headerTab } = styles;

  return (
        <View style={[headerContainer, theme]}>
          <Text style={[headerText, theme]}>Navbar</Text>

          <TouchableOpacity onPress={toggleAuthStatus}>
            <Text style={[headerText, theme]}>{isLoggedIn ? 'Logged In' : 'Logged Out'}</Text>
          </TouchableOpacity>

          <View style={headerTabContainer}>
            <Text style={headerTab}>Overview</Text>
            <Text style={headerTab}>Contact</Text>
            <Text style={headerTab}>Support</Text>
          </View>
        </View>    
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: "center",
    backgroundColor: "#aaa",
    display: "flex",
    height: 300,
    justifyContent: "space-between",
    paddingTop: 25,
  },
  headerText: {
    marginTop: 25,
    fontSize: 28,
    color: "#fff",
  },
  headerTabContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 25,
    backgroundColor: "#ccc",
    alignSelf: "flex-end",
  },
  headerTab: {
    fontSize: 22,
    paddingVertical: 10,
  },
});

export default Navbar;
