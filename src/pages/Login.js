import React, { useState, useEffect } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, AsyncStorage } from 'react-native';
import api from '../services/api';
import logo from '../assets/logo.png';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [services, setServices] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('user').then(user => {
      if(user) {
        navigation.navigate('List');
      }
    })
  },[])

  async function handleSubmit() {
    // email, services
    // console.log(email, services);
    const response = await api.post('/sessions', {
      email
    });

    const { _id } = response.data;
    // console.log( _id );

    await AsyncStorage.setItem('user', _id);
    await AsyncStorage.setItem('services', services);

    navigation.navigate('List');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      enabled={Platform.OS === 'ios'}
    >
      <Image style={styles.img} source={logo} />

      <View style={styles.form}>
        <Text style={styles.label}>Your Email*</Text>
        <TextInput
          style={styles.input}
          placeholder="Your email"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={setEmail} /* onChangeText = {text => setEmail(text)} - Only with React Native */
        />

        <Text style={styles.label}>Services*</Text>
        <TextInput
          style={styles.input}
          placeholder="Which service?"
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
          value={services}
          onChangeText={setServices}
        />

        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Find your spots!</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#191d3a'
  },

  img: {
    width: 250
  },

  form: {
    marginTop: 30,
    alignSelf: 'stretch',
    paddingHorizontal: 30
  },

  label: {
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8
  },

  input: {
    borderWidth: 1,
    borderColor: '#fff',
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#fff',
    height: 44,
    marginBottom: 20,
    borderRadius: 2
  },

  button: {
    height: 42,
    backgroundColor: '#4f6294',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15
  }
});
