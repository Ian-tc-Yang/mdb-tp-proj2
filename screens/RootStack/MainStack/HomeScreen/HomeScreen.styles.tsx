import React from "react";
import { StyleSheet } from "react-native";
import { AppStyles } from "../../../../AppStyles";

export const styles = StyleSheet.create({
  ...AppStyles,
  view: {
    flex: 1,
    margin: 20,
  },
  subtitle: {
    color: "gray",
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 30,
    borderRadius: 10,
  },
  buttonContainer: {
    width: '80%',
    marginTop: 20,
  },
});