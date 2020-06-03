import React, { useState, useEffect } from 'react';
import { AsyncStorage, SafeAreaView, ScrollView, Image, StyleSheet, Alert } from 'react-native';
import SpotList from '../components/SpotList';
import logo from '../assets/logo.png';
import socketio from 'socket.io-client';

export default function List() {
  const [services, setServices] = useState([]); // Array and not text.

  useEffect(() => {
    AsyncStorage.getItem('user').then(user_id => {
      const socket = socketio('http://172.20.10.3:3333', {
        query: { user_id }
      });

      socket.on('booking_response', booking => {
        Alert.alert(`Your request at ${booking.spot.company} on ${booking.date} was ${booking.approved ? 'APPROVED' : 'DECLINED'}`)
      });
    })
  }, [])

  useEffect(() => {
    AsyncStorage.getItem('services').then(service => {
      const serviceArray = service.split(',').map(serv => serv.trim());

      setServices(serviceArray);
    })
  },[]);

  return (
    <SafeAreaView style={styles.container}>
     <Image style={styles.logo} source={logo}/>

      <ScrollView>
        {services.map(service => <SpotList key={service} service={service}/>)}
      </ScrollView>
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
