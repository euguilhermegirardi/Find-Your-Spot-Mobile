import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import api from '../services/api';

function SpotList({ service, navigation }) {
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

  function handleNavigate(id) {
    navigation.navigate('Book', { id })
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Companies that offer <Text style={styles.bold}>{service}</Text></Text>
      <FlatList
        style={styles.list}
        data={spots}
        keyExtractor={spot => spot._id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Image style={styles.thumbnail} source={{ uri: item.thumbnail_url }} />
            <Text style={styles.company}>{item.company}</Text>
            <Text style={styles.price}>{item.price ? `€${item.price}/day` : 'FREE'}</Text>

            <TouchableOpacity onPress={() => handleNavigate(item._id)} style={styles.button}>
              <Text style={styles.buttonText}>Request your spot!</Text>
            </TouchableOpacity>
          </View>
        )}
      />
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
  },

  list:{
    paddingHorizontal: 20
  },

  listItem: {
    marginRight: 15
  },

  thumbnail: {
    width: 200,
    height: 120,
    resizeMode: 'cover',
    borderRadius: 2
  },

  company: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10
  },

  price: {
    fontSize: 15,
    color: '#fff',
    marginTop: 5
  },

  button: {
    height: 32,
    backgroundColor: '#4f6294',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    marginTop: 15
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15
  }
});

export default withNavigation(SpotList);
