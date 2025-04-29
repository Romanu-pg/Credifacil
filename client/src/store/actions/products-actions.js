import axios from 'axios';

import { productsActions } from '../products-slice';
import { uiActions } from '../ui-slice';
import api from '../../utils/api';
import ProductDetail from '../../pages/ProductDetail';


export const getProducts = () => {
    return async dispatch => {
        dispatch(uiActions.productsLoading());

        const fetchData = async () => {
            //const response = await axios.get('http://localhost:8000/api/products');

            //const data = await response.data;
            const data = [];
            // "id": 1,
            // "name": "Laptop Pro 15",
            // "description": "A high-performance laptop with a 15-inch display, 16GB RAM, and 512GB SSD.",
            // "price": 1299.99,
            // "certification": "Gold Standard",
            // "location": "Brazil",
            // "quantity": 100,
            // "brand": "TechBrand",
            // "shipping": true,
            // "sku": "TB-LAPTOP-15",
            // "created_at": "2024-09-22T10:45:30",
            // "updated_at": "2024-09-22T11:15:45"


            return data;
        };

        try {
            let products = [];
            await fetch('http://localhost:3004/projects')
                .then((response) => response.json())
                .then((json) => products = json);

            //         {
            //             "id": 2,
            //             "name": "Song Giang 2 Hydro Power Project",
            //             "description": "El proyecto hidroeléctrico Song Giang producirá suficiente energía para abastecer a 74.000 hogares de Vietnam y compensará aproximadamente 110.000 toneladas de emisiones de carbono al año. También creará directamente 250 puestos de trabajo durante la construcción de Song Giang 1 y mantendrá 50 puestos de trabajo a largo plazo durante la operación. También contribuirá directa e indirectamente al desarrollo económico de la región de otras maneras significativas. Los proyectos se construirán y mejorarán para cumplir con los estándares internacionales de calidad y con los estándares ambientales y sociales del Banco Mundial.",
            //             "price": 1.8,
            //             "certification": "Gold Standard",
            //             "location": "Brazil",
            //             "quantity": 100,
            //             "brand": "PhoneTech",
            //             "shipping": true,
            //             "sku": "PT-X200",
            //             "created_at": "2024-08-10T12:30:20",
            //             "updated_at": "2024-08-10T15:45:10",
            //             "thumbnails": ""
            //         },
            //         {
            //             "id": 3,
            //             "name": "Amazon Rainforest Project",
            //             "description": "Lightweight and durable running shoes with excellent grip and cushioning for long-distance running.",
            //             "price": 120.50,
            //             "certification": "Gold Standard",
            //             "location": "Brazil",
            //             "quantity": 100,
            //             "brand": "FastFoot",
            //             "shipping": true,
            //             "sku": "FF-RS-PRO",
            //             "created_at": "2024-07-22T09:14:35",
            //             "updated_at": "2024-07-22T09:45:30",
            //             "thumbnails": ""
            //         },
            //         {
            //             "id": 4,
            //             "name": "Wireless Headphones",
            //             "description": "Noise-cancelling over-ear headphones with up to 30 hours of battery life and fast charging.",
            //             "price": 250.00,
            //             "certification": "Gold Standard",
            //             "location": "Brazil",
            //             "quantity": 100,
            //             "brand": "SoundWave",
            //             "shipping": true,
            //             "sku": "SW-WH-500",
            //             "created_at": "2024-06-30T14:25:50",
            //             "updated_at": "2024-06-30T17:10:20",
            //             "thumbnails": ""
            //         },
            //         {
            //             "id": 5,
            //             "name": "Gaming Laptop ZX",
            //             "description": "High-end gaming laptop with 17-inch 4K display, 32GB RAM, 1TB SSD, and RTX 3080 GPU.",
            //             "price": 2299.99,
            //             "certification": "Gold Standard",
            //             "location": "Brazil",
            //             "quantity": 100,
            //             "brand": "GamePro",
            //             "shipping": false,
            //             "sku": "GP-ZX-GAMING",
            //             "created_at": "2024-09-01T16:50:10",
            //             "updated_at": "2024-09-02T12:30:00",
            //             "thumbnails": ""
            //         },
            //         {
            //             "id": 6,
            //             "name": "Espresso Machine Deluxe",
            //             "description": "Premium espresso machine with built-in grinder, milk frother, and programmable settings.",
            //             "price": 749.95,
            //             "certification": "Gold Standard",
            //             "location": "Brazil",
            //             "quantity": 100,
            //             "brand": "BrewMaster",
            //             "shipping": true,
            //             "sku": "BM-ESP-DELU",
            //             "created_at": "2024-05-18T08:05:45",
            //             "updated_at": "2024-05-18T10:30:15",
            //             "thumbnails": ""
            //         }
            // ];


            dispatch(productsActions.replaceProducts(products));
            dispatch(uiActions.productsLoading());

        }
        catch (error) {
            console.log('failed to fetch products');
        }
    }
};


export const getProductDetails = (id) => {
    return async dispatch => {
        dispatch(uiActions.pDetailLoading());

        try {
            let data = {};
            console.log("holoooooooooooooooooooo");
            const productDetails = await fetch('http://localhost:3004/projects/' + id)
                    .then((response) => response.json())
                    .then((json) => data = json);
            
            console.log("holaaaaaaaaa");
            dispatch(productsActions.setProductDetails(productDetails));
            dispatch(uiActions.pDetailLoading());
        } catch (error) {
            console.log('failed to fetch product details');
        }
    }

};


export const addProduct = ({ product, token }) => {
    return async dispatch => {
        dispatch(uiActions.addPrductLoading());
        await api.get('/sanctum/csrf-cookie');

        const postData = async () => {
            const response = await axios.post('http://localhost:3004/projects/', product, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: 'Bearer ' + token,
                },
                withCredentials: true
            });
            const data = response.data;
            return data;
        };

        try {
            const message = await postData();
            console.log('message : ', message);
            dispatch(getProducts());
            // dispatch(productsActions.addProduct(product));
            dispatch(uiActions.addPrductLoading());

        } catch (error) {
            console.log(error);
        }
    };
};





export const updateProduct = ({ product, id, token }) => {
    return async dispatch => {
        dispatch(uiActions.updateProductLoading());
        await api.get('/sanctum/csrf-cookie');

        const putData = async () => {
            // const response = await api.put(`/api/products/${id}`, product, {
            //     headers: {
            //         Authorization: 'Bearer ' + token
            //     }
            // });
            const data = {
                "id": 3,
                "name": "Amazon Rainforest Project",
                "description": "Lightweight and durable running shoes with excellent grip and cushioning for long-distance running.",
                "price": 120.50,
                "certification": "Gold Standard",
                "location": "Brazil",
                "quantity": 100,
                "brand": "FastFoot",
                "shipping": true,
                "sku": "FF-RS-PRO",
                "created_at": "2024-07-22T09:14:35",
                "updated_at": "2024-07-22T09:45:30"
            };
            return data;
        };

        try {
            await putData();
            dispatch(getProducts());
            dispatch(uiActions.updateProductLoading());

        } catch (error) {
            console.log(error);
        }

    };
};














