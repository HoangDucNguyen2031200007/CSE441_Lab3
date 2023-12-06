import { useEffect, useState } from "react";

const Product_Detail = () => {
    const productDetail = () => {
        const [data, setData] = useState([]);
        const filePath = 'https://dummyjson.com/products/2';

        useEffect(() => {
            fetch(filePath)
                .then((response) => {
                    if (!response.ok) {
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
        })
    };
}
export default Product_Detail;