import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import api from '../services/api';

export default function SpotList({ service }) {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    async function loadSpots() {
      const response = await api.get('/spots', {
        params: {service}
      })
      // console.log(response.data);
      setSpots(response.data);
    }
    loadSpots();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Companies that offer <Text style={styles.bold}>{service}</Text></Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30
  },

  title: {
    fontSize: 20,
    color: '#fff',
    paddingHorizontal: 20,
    marginBottom: 15
  },

  bold: {
    fontWeight: 'bold'
  }
});
