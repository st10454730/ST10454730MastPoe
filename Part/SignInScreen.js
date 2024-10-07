import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity, Image } from 'react-native';

const SignInScreen = ({ navigation }) => {
  const [username, setUsername] = useState(''); // State for username
  const [password, setPassword] = useState(''); // State for password

  // Predefined users for demonstration purposes
  const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
  ];

  const handleSignIn = () => {
    // Check if the user exists
    const user = users.find((user) => user.username === username && user.password === password);
    
    // Validation checks
    if (username === '' || password === '') {
      Alert.alert('Error', 'Please enter both username and password');
    } else if (password.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters');
    } else if (!user) {
      Alert.alert('Error', 'Invalid username or password');
    } else {
      Alert.alert('Success', 'Login successful!');
      navigation.navigate('Home'); // Navigate to Home screen upon successful login
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./img/food.jpg')} 
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Welcome to Christoffel</Text>

      <TextInput
        style={styles.input}
        placeholder="Username" // Placeholder for username
        value={username} // Value for the username input
        onChangeText={(text) => setUsername(text)} // Update username state
        autoCapitalize="none" // No auto-capitalization for usernames
      />

      <TextInput
        style={styles.input}
        placeholder="Password" // Placeholder for password
        value={password} // Value for the password input
        onChangeText={(text) => setPassword(text)} // Update password state
        secureTextEntry // Secure text entry for password
        autoCapitalize="none" // No auto-capitalization for passwords
      />

      {/* Sign In Button */}
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f2f2f2', // Light gray background color
  },
  logo: {
    width: 200, // Logo width
    height: 200, // Logo height
    alignSelf: 'center', // Center logo horizontally
    marginBottom: 30, // Space below the logo
  },
  title: {
    fontSize: 28, // Title font size
    marginBottom: 20, // Space below the title
    textAlign: 'center', // Center title text
    fontWeight: 'bold', // Bold title
  },
  input: {
    height: 40, // Height of the input fields
    borderColor: '#ccc', // Border color for input fields
    borderWidth: 1, // Border width for input fields
    marginBottom: 20, // Space below the input fields
    paddingHorizontal: 10, // Horizontal padding for input fields
    borderRadius: 5, // Rounded corners for input fields
    backgroundColor: '#fff', // White background for input fields
  },
  button: {
    marginTop: 10, // Space above button
    backgroundColor: '#007BFF', // Blue background for button
    paddingVertical: 10, // Vertical padding for button
    borderRadius: 5, // Rounded corners for button
    alignItems: 'center', // Center button text
  },
  buttonText: {
    color: '#fff', // White text color for button
    fontSize: 18, // Font size for button text
    fontWeight: 'bold', // Bold button text
  },
});

export default SignInScreen;
//OpenAI. (2024). SignInScreen Component in React Native. Available at: GitHub Repository or Your Project (Accessed: 2 October 2024).