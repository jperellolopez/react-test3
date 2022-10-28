/*
CLAVES DE PRODUCTO DE STRIPE. SUSTITUYEN A LOS NÚMEROS DEL ID
Intel Core i9-11900K: price_1Lx9RrF9yu9x1sdknzIaHkyS
AMD Ryzen 5 2600: price_1Lx9RYF9yu9x1sdkaDPgQPFx
Intel Core i7-10700K: price_1Lx9RFF9yu9x1sdkg8Ts3jml
AMD Ryzen 7 5800X: price_1Lx9QsF9yu9x1sdkzO46lLfc
AMD Ryzen 5 5600X: price_1Lx9QWF9yu9x1sdkt4fbWRz3
Intel Core i5-10400F: price_1Lx9Q8F9yu9x1sdkRuVmKzJF
AMD Threadripper 3990X: price_1Lx9PqF9yu9x1sdkbAHGyCg3
Intel Core i7-11700K: price_1Lx9OzF9yu9x1sdkcFgQavLC
AMD Ryzen 5 3600: price_1Lx9OfF9yu9x1sdksTpCL6SF
*/

const productsArray = [
    {
        id: "price_1Lx9OfF9yu9x1sdksTpCL6SF",
        name: "AMD Ryzen 5 3600",
        price: 245.99,
        core_count: "6",
        core_clock: "3.6 GHz",
        tdp: "65 W",
        integrated_graphics: null
    },
    {
        id: "price_1Lx9OzF9yu9x1sdkcFgQavLC",
        name: "Intel Core i7-11700K", 
        price: 399.99, 
        core_count: "8", 
        core_clock: "3.6 GHz", 
        tdp: "125 W", 
        integrated_graphics: "Intel UHD Graphics 750"
    },
    {
        id: "price_1Lx9PqF9yu9x1sdkbAHGyCg3",
        name: "AMD Threadripper 3990X", 
        price: 5098.99, 
        core_count: "64", 
        core_clock: "2.9 GHz", 
        tdp: "280 W", 
        integrated_graphics: null
    },
    {
        id: "price_1Lx9Q8F9yu9x1sdkRuVmKzJF",
        name: "Intel Core i5-10400F", 
        price: 189.08, 
        core_count: "6", 
        core_clock: "2.9 GHz", 
        tdp: "65 W", 
        integrated_graphics: null
    }, 
    {
        id:"price_1Lx9QWF9yu9x1sdkt4fbWRz3",
        name: "AMD Ryzen 5 5600X",
        price: 299.0, 
        core_count: "6", 
        core_clock: "3.7 GHz", 
        tdp: "65 W", 
        integrated_graphics: null
    },
    {
        id:"price_1Lx9QsF9yu9x1sdkzO46lLfc",
        name: "AMD Ryzen 7 5800X",
        price: 399.00, 
        core_count: "8", 
        core_clock: "3.8 GHz", 
        tdp: "105 W", 
        integrated_graphics: null
    },
    {
        id:"price_1Lx9RFF9yu9x1sdkg8Ts3jml",
        name: "Intel Core i7-10700K", 
        price: 319.99, 
        core_count: "8", 
        core_clock: "3.8 GHz",  
        tdp: "125 W", 
        integrated_graphics: "Intel UHD Graphics 630"
    },
    {
        id:"price_1Lx9RYF9yu9x1sdkaDPgQPFx",
        name: "AMD Ryzen 5 2600", 
        price: 174.99, 
        core_count: "6", 
        core_clock: "3.4 GHz", 
        tdp: "65 W", 
        integrated_graphics: null

    },
    { 
        id:"price_1Lx9RrF9yu9x1sdknzIaHkyS",
        name: "Intel Core i9-11900K", 
        price: 544.99, 
        core_count: "8", 
        core_clock: "3.5 GHz",  
        tdp: "125 W", 
        integrated_graphics: "Intel UHD Graphics 750"

    },
]

function getProductData(id){
    let productData = productsArray.find(product => product.id === id)

    if (productData == undefined) {
        console.log("No hay un producto con el id: " + id)
        return undefined
    }

    return productData
}

export {productsArray, getProductData}