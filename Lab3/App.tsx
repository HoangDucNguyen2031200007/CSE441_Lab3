import ProductList from './products/Product';
import Product_Add from './products/Product_Add';
import Product_Search from './products/Product_Search';
import Product_Detail from './products/Product_Detail';
import { BottomNavigation, Text} from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React, { useEffect, useState } from "react";
import {View,Text} from 'react-native'

export default App = () => {
    // const [index, setIndex] = useState(0);
    // const [routes] = useState ([
    //     {key: 'ProductList', title: 'Products', focusedIcon: 'folder'},
    //     {key: 'Product_Add', title: 'Add', focusedIcon: 'folder'},
    //     {key: 'Product_Search', title: 'Search', focusedIcon: 'find'},
    //     {key: 'Product_Detail', title: 'Detail', focusedIcon: 'calendar'},
    // ]);

    // const renderScene = BottomNavigation.SceneMap({
    //   ProductList: ProductList,
    //   Product_Add: Product_Add,
    //   Product_Search: Product_Search,
    //   Product_Detail: Product_Detail,
    // })
    
    // const [data, setData] = useState([])
    // const filePath = 'https://dummyjson.com/products';
    // useEffect(() => {
    //     fetch(filePath)
    //         .then((response) => {
    //             if(!response.ok) {
    //                 throw new Error ('Network response was not ok');
    //             }
    //             return response.json();
    //         })
    //         .then((d) => {
    //             setData(d.products);
    //         })
    //         .catch((error) => {
    //             console.error('Error fetching data:', error);
    //         });
    // });

    return (
      // <SafeAreaProvider>
      //   <BottomNavigation
      //     navigationState={{index, routes}}
      //     onIndexChange={setIndex}
      //     renderScene={renderScene}
      //   />
      // </SafeAreaProvider>
      <View><Text>4efasdfsdadfas</Text></View>
    // <ProductList/>
    )
}