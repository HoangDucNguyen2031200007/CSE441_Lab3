import { useState } from "react";
import { Alert, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";

const Product_Add = () => {
    const [title, setTitle] = useState(' ');
    const [description, setDescription] = useState(' ');
    const [price, setPrice] = useState(' ');
    const [discountPercentage, setDiscountPercentage] = useState(' ');
    const [rating, setRating] = useState(' ');
    const [stock, setStock] = useState(' ');
    const [brand, setBrand] = useState(' ');
    const [catagory, setCatagory] = useState(' ');
    const [image, setImage] = useState(' ');
    handleSubmit = () => {
        fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: title,
                description: description,
                price: price,
                discountPercentage: discountPercentage,
                rating: rating,
                stock: stock,
                brand: brand,
                catagory: catagory,
                image: image,
            }),
        })
            .then((res) => res.json())
            .then(console.log);
        Alert.alert("Add Successful!")
    };

    return (
        <SafeAreaView>
            <Text style={styles.header}>Add a Product</Text>
            <Text style={styles.label}>Title</Text>
            <TextInput
                placeholder="Enter title"
            />
            <Text style={styles.label}>Description</Text>
            <TextInput
                placeholder="Enter description"
            />
            <Text style={styles.label}>Price</Text>
            <TextInput
                placeholder="Enter price"
            />
            <Text style={styles.label}>Discount Percentage</Text>
            <TextInput
                placeholder="Enter discount percentage"
            />
            <Text style={styles.label}>Rating</Text>
            <TextInput
                placeholder="Enter rating"
            />
            <Text style={styles.label}>Stock</Text>
            <TextInput
                placeholder="Enter stock"
            />
            <Text style={styles.label}>Brand</Text>
            <TextInput
                placeholder="Enter brand"
            />
            <Text style={styles.label}>Category</Text>
            <TextInput
                placeholder="Enter category"
            />
            <Text style={styles.label}>Image</Text>
            <TextInput
                placeholder="Enter image URL"
            />
            <TouchableOpacity style={styles.button} onPress={handleSubmit()}>
                <Text style={styles.buttonText}>SUBMIT</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 20,
        color:"blue",
        fontWeight:"bold",
    },
    label: {
        fontWeight:"bold",
    },
    button: {
        textAlign: "center",
        backgroundColor: "blue,"
    }
})
export default Product_Add;