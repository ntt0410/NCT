import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import UserNCT from './UserNCT';
import HomeNCT from './HomeNCT';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const navigation = useNavigation();
  const [showSearchInput, setShowSearchInput] = useState(false);

  const handleSearchPress = () => {
    navigation.navigate('Search');
  };

  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Trang Chủ" 
        component={HomeNCT} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={24} color="#000000" />
          ),
          tabBarLabelStyle: styles.tabBarLabelStyle,
          headerRight: () => (
            <TouchableOpacity
              onPress={handleSearchPress}
              style={styles.headerRightContainer}
            >
              <Text style={styles.headerRightText}>Tìm kiếm bài hát</Text>
              <Ionicons name="search" size={24} color="#000000" />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen 
        name="Cá Nhân" 
        component={UserNCT}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={24} color="#000000" />
          ),
          tabBarLabelStyle: styles.tabBarLabelStyle,
        }}
       />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarLabelStyle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  headerRightContainer: {
    marginRight: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerRightText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
  },
});

export default TabNavigator;