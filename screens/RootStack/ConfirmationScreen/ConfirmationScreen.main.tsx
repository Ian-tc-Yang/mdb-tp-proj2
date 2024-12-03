import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../RootStackScreen";
//import LottieView from 'lottie-react-native';


interface Props {
  navigation: StackNavigationProp<RootStackParamList, "ConfirmationScreen">;
}

export default function ConfirmationScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      {/* Celebration Animation */}
      {/* <LottieView
        source={require('./assets/celebration.json')} // Add your Lottie file
        autoPlay
        loop={false}
        style={styles.animation}
      /> */}

      {/* Confirmation Message */}
      <Text style={styles.title}>🎉 Success!</Text>
      <Text style={styles.subtitle}>Your action was completed successfully.</Text>

      {/* Button Container */}
      <View style={styles.buttonContainer}>
        {/* Go to Home Screen */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('HomeScreen')}
          
        >
          <Text style={styles.buttonText}>Go to Home</Text>
        </TouchableOpacity>

        {/* View Socials Screen */}
        <TouchableOpacity
          style={[styles.button, styles.socialButton]}
          onPress={() => navigation.navigate('NewSocialScreen')}
        >
          <Text style={styles.buttonText}>View Socials</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  animation: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2d3436',
    marginTop: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#636e72',
    textAlign: 'center',
    marginVertical: 10,
  },
  buttonContainer: {
    marginTop: 30,
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#0984e3',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginBottom: 10,
    width: '70%',
    alignItems: 'center',
  },
  socialButton: {
    backgroundColor: '#6c5ce7',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});


