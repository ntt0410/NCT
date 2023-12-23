import { createContext, useContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (username, password) => {
    try {
      console.log('Đang đăng nhập', username, password);
      await AsyncStorage.setItem('user', JSON.stringify({ username }));
      console.log('Đăng nhập thành công');
      setUser({ username });
    } catch (error) {
      console.error('Lỗi khi đăng nhập', error);
    }
  };

  const register = async (username, password) => {
    try {
      console.log('Đang đăng ký', username, password);
      await AsyncStorage.setItem('user', JSON.stringify({ username }));
      console.log('Đăng ký thành công');
      setUser({ username });
    } catch (error) {
      console.error('Lỗi khi đăng ký', error);
    }
  };

  const logout = async () => {
    console.log('Đang đăng xuất...');
    await AsyncStorage.removeItem('user');
    console.log('Đăng xuất thành công');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};