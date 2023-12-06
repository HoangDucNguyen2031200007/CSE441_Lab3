/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View,Text} from 'react-native'
import ProductList from './Products/Product';
import Product_Add from './Products/Product_Add';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import productSearch from './Products/Product_Search';
import productDetail from './Products/Product_Detail';

const Tab = createBottomTabNavigator();

const App=()=> {
  

  return (
  <Tab.Navigator>
    <Tab.Screen name="Products" component={ProductList} />
    <Tab.Screen name="Add" component={Product_Add} />
    <Tab.Screen name="Search" component={productSearch} />
    <Tab.Screen name="Detail" component={productDetail} />
  </Tab.Navigator>
  );
}


export default App;
