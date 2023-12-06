import {useState} from 'react';

const [data, setData] = useState([]);
const [value, setValue] = useState('');
let filePath = 'https://dummyjson.com/products';

const searchProduct = () => {
    if(value!='')
        filePath = 'https://dummyjson.com/products/search?q=' + value;
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
        });
};

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

const productSearch = () => {
    return (
        <SafeAreaView>
            <Text style={styles.header}>Search Products</Text>
            <TextInput
            />
            <TouchableOpacity onPress={searchProduct()} style={styles.button} >
                <Text style={styles.buttonText}>SEARCH</Text>
            </TouchableOpacity>
            <Text style={styles.label}>Product Detail</Text>
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
    )
};

const styles = StyleSheet.create({
    header: {
        fontSize: 24,
        fontWeight:"bold",
    },
    label: {
        fontWeight:"bold",
    },
    button: {
        textAlign: "center",
        backgroundColor: "blue,"
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

export default productSearch;