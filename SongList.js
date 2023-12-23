import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SongList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Danh Sách Các Bài Hát</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default SongList;