import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeNCT = () => {
  const navigation = useNavigation();

  const handleSongList = () => {
    navigation.navigate('SongList');
  }; 
  
  return (
    <ScrollView style={styles.container}>
      <ScrollView horizontal={true} style={styles.container}>
      <View style={styles.box1}>
        <TouchableOpacity onPress={() => handleSongList()} style={styles.touchableOpacity}>
          <Text  style={styles.textContainer}>Danh Sách Các Bài Hát</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  box1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 80,
    marginTop: 20
  },
  touchableOpacity: {
    backgroundColor: 'lightblue',
    padding: 50,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  textContainer:{
    fontWeight: 'bold',
    fontSize: 20,
  }
});

export default HomeNCT;
