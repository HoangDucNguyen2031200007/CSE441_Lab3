import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
    Image,
} from 'react-native';


/* const data = [
    {
        id: '1',
        title: 'Iphone 9',
        description: 'An apple mobile which is nothing like apple',
        price: '549',
        discountPercentage: '12.96 off',
        rating: '4.69',
        stock: '94',
        brand: 'Apple',
        catagory: 'smartphone',
        thumbnail: 'img/BARC.png'
    },
    {
        id: '2',
        title: 'Iphone 9',
        description: 'An apple mobile which is nothing like apple',
        price: '549',
        discountPercentage: '12.96 off',
        rating: '4.69',
        stock: '94',
        brand: 'Apple',
        catagory: 'smartphone',
        thumbnail: 'img/BARC.png'
    }
]; */

const [data, setData] = useState([])
const filePath = 'https://dummyjson.com/products/';
useEffect(() => {
    fetch(filePath)
        .then((response) => {
            if(!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((d) => {
            setData(d.products)
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        })
})

const Item = ({ title, description, price, discountPercentage, rating, stock, brand, catagory, thumbnail }) => (
    <View style={styles.item}>
        <Image
            style={styles.thumbnail}
            source={require(thumbnail)}
        />
        <Text style={styles.title}>Title: {title}</Text>
        <Text style={styles.description}>Description: {description}</Text>
        <Text style={styles.description}>Price: {price}</Text>
        <Text style={styles.discount}>Discount: {discountPercentage}</Text>
        <Text style={styles.description}>Rating: {rating}</Text>
        <Text style={styles.description}>Stock: {stock}</Text>
        <Text style={styles.description}>Brand: {brand}</Text>
        <Text style={styles.description}>Catagory: {catagory}</Text>
    </View>
);

const ProductList = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Product List</Text>
            <FlatList
                data={data}
                renderItem={({ item }) => <Item title={item.title}
                                                description={item.description}
                                                price={item.price}
                                                discountPercentage={item.discountPercentage}
                                                rating={item.rating}
                                                stock={item.stock}
                                                brand={item.brand}
                                                catagory={item.catagory}
                                                thumbnail={item.thumbnail}
                                            />}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    header: {
        margin: 10,
        marginTop: 0,
        fontSize: 32,
        fontWeight: 'bold',
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        backgroundColor: "lightgray",
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 20,
    },
    discount: {
        fontSize: 20,
        color: "green"
    },
    thumbnail: {
        width: 50,
        height: 50,
    },
});

export default ProductList;