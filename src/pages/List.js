import React, { useState, useEffect } from 'react';
import { AsyncStorage, SafeAreaView, Text, Image, StyleSheet } from 'react-native';
import SpotList from '../components/SpotList';
import logo from '../assets/logo.png';

export default function List() {
  const [services, setServices] = useState([]); // Array and not text.

  useEffect(() => {
    AsyncStorage.getItem('services').then(service => {
      const serviceArray = service.split(',').map(serv => serv.trim());

      setServices(serviceArray);
    })
  },[]);

  return (
    <SafeAreaView style={styles.container}>
     <Image style={styles.logo} source={logo}/>
     {services.map(service => <SpotList key={service} service={service}/>)}
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191d3a',
  },

  logo: {
    height: 80,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});
