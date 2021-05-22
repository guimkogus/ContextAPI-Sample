import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Navbar = () => {
  const { headerContainer, headerText, headerTabContainer, headerTab } = styles;

  return (
    <View style={headerContainer}>
      <Text style={headerText}>Navbar</Text>

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
    height: 200,
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
