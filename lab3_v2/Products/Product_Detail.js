import { Card } from '@rneui/themed';
import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';

const [data, setData] = useState([])
const filePath = 'https://dummyjson.com/products/2';
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
});


const productDetail = () => {
    return (
        <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Product Detail</Text>
        <Card>
        {data.map((u, i) => {
            return (
                <View key={i} style={styles.item}>
                <Image
                    style={styles.thumbnail}
                    source={{ uri: u.thumbnail}}
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
            })}
            <Button>Delete</Button>
        </Card>
    </SafeAreaView>
    )
}

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
    button: {
        padding: 10,
        backgroundColor: "purple",
        color: "white",
        borderRadius: 25,
    }
});

export default productDetail;