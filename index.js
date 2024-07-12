let exp = require("express");
let app = exp();
let cors = require("cors");
let port = 3000;
app.use(cors());
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
console.log("Flip Deal Product Listing Page");
// modified object for correct brand and os
let products = [
  {
    id: 1,
    name: "Xiaomi iPhone 12",
    brand: "Xiaomi",
    price: 60000,
    ram: 6,
    rom: 256,
    rating: 4.5,
    os: "iOS",
    camera: 108,
  },
  {
    id: 2,
    name: "Oppo Mi 10",
    brand: "Oppo",
    price: 30000,
    ram: 6,
    rom: 512,
    rating: 4,
    os: "Android",
    camera: 64,
  },
  {
    id: 3,
    name: "Samsung Mi 10",
    brand: "Samsung",
    price: 20000,
    ram: 4,
    rom: 256,
    rating: 4,
    os: "Android",
    camera: 24,
  },
  {
    id: 4,
    name: "Apple Find X2",
    brand: "Apple",
    price: 60000,
    ram: 8,
    rom: 512,
    rating: 4.5,
    os: "iOS",
    camera: 48,
  },
  {
    id: 5,
    name: "Oppo Mi 11",
    brand: "Oppo",
    price: 30000,
    ram: 12,
    rom: 128,
    rating: 4,
    os: "Android",
    camera: 24,
  },
  {
    id: 6,
    name: "OnePlus Find X3",
    brand: "OnePlus",
    price: 30000,
    ram: 12,
    rom: 64,
    rating: 4,
    os: "Android",
    camera: 64,
  },
  {
    id: 7,
    name: "Apple Pixel 5",
    brand: "Apple",
    price: 70000,
    ram: 4,
    rom: 512,
    rating: 4.5,
    os: "iOS",
    camera: 24,
  },
  {
    id: 8,
    name: "Google Mi 10",
    brand: "Google",
    price: 30000,
    ram: 8,
    rom: 64,
    rating: 5,
    os: "Android",
    camera: 108,
  },
  {
    id: 9,
    name: "Oppo Mi 11",
    brand: "Oppo",
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 4,
    os: "Android",
    camera: 24,
  },
  {
    id: 10,
    name: "Xiaomi Mi 10",
    brand: "Xiaomi",
    price: 60000,
    ram: 16,
    rom: 512,
    rating: 4.5,
    os: "Android",
    camera: 12,
  },
  {
    id: 11,
    name: "OnePlus Pixel 5",
    brand: "OnePlus",
    price: 60000,
    ram: 12,
    rom: 64,
    rating: 5,
    os: "Android",
    camera: 12,
  },
  {
    id: 12,
    name: "Xiaomi OnePlus 8",
    brand: "Xiaomi",
    price: 70000,
    ram: 8,
    rom: 64,
    rating: 4.5,
    os: "Android",
    camera: 48,
  },
  {
    id: 13,
    name: "Xiaomi Pixel 6",
    brand: "Xiaomi",
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: "Android",
    camera: 108,
  },
  {
    id: 14,
    name: "Samsung Find X2",
    brand: "Samsung",
    price: 40000,
    ram: 12,
    rom: 512,
    rating: 4.7,
    os: "Android",
    camera: 48,
  },
  {
    id: 15,
    name: "Google OnePlus 8",
    brand: "Google",
    price: 20000,
    ram: 16,
    rom: 64,
    rating: 5,
    os: "Android",
    camera: 24,
  },
  {
    id: 16,
    name: "OnePlus iPhone 12",
    brand: "OnePlus",
    price: 20000,
    ram: 6,
    rom: 128,
    rating: 4.5,
    os: "iOS",
    camera: 64,
  },
  {
    id: 17,
    name: "Google Mi 11",
    brand: "Google",
    price: 70000,
    ram: 6,
    rom: 64,
    rating: 4,
    os: "Android",
    camera: 64,
  },
  {
    id: 18,
    name: "Google OnePlus 9",
    brand: "Google",
    price: 20000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: "Android",
    camera: 64,
  },
  {
    id: 19,
    name: "Oppo Galaxy S22",
    brand: "Oppo",
    price: 20000,
    ram: 16,
    rom: 256,
    rating: 4.7,
    os: "Android",
    camera: 12,
  },
  {
    id: 20,
    name: "Apple Pixel 5",
    brand: "Apple",
    price: 40000,
    ram: 8,
    rom: 128,
    rating: 4.7,
    os: "iOS",
    camera: 108,
  },
];

/*
Make sure you return the JSON of products in the format res.json({ products: sortedProducts }) where sortedProducts is the variable name used to store the result
*/

/*
Endpoint 1: Get the products sorted by popularity

Write an Express code snippet to sort products based on their individual ratings.

Instructions:

Define an endpoint /products/sort/popularity using the get method.

Define a variable sortedProducts to create a condition to sort the products on their ratings (high to low)

Send the filtered products as a JSON response.
*/
function sortProductsByPopularity(productObj1, productObj2) {
  return productObj2.rating - productObj1.rating;
}

app.get("/products/sort/popularity", (req, res) => {
  let sortedProducts = products.slice().sort(sortProductsByPopularity);
  res.json({ products: sortedProducts });
});

/*
Endpoint 2: Get the products sorted by “high-to-low” price

Write an Express code snippet to sort products based on their individual pricing.

Instructions:

Define an endpoint /products/sort/price-high-to-low using the get method.

Define a variable sortedProducts to create a condition to sort the products on their pricing (high to low)

Send the filtered products as a JSON response.
*/
function sortProductsByPrice(productObj1, productObj2) {
  return productObj2.price - productObj1.price;
}
app.get("/products/sort/price-high-to-low", (req, res) => {
  let sortedProducts = products.slice().sort(sortProductsByPrice);
  res.json({ products: sortedProducts });
});

/*
Endpoint 3: Get the products sorted by “low-to-high” price

Write an Express code snippet to sort products based on their individual pricing.

Instructions:

Define an endpoint /products/sort/price-low-to-high using the get method.

Define a variable sortedProducts to create a condition to sort the products on their pricing ( low to high)

Send the filtered products as a JSON response.
*/
function sortProductsByPriceLowToHigh(productObj1, productObj2) {
  return productObj1.price - productObj2.price;
}
app.get("/products/sort/price-low-to-high", (req, res) => {
  let sortedProducts = products.slice().sort(sortProductsByPriceLowToHigh);
  res.json({ products: sortedProducts });
});

/*
Endpoint 4: Filter the products based on the “RAM” option.

Write an Express code snippet to filter products based on the selected RAM option.

Instructions:

Define an endpoint /products/filter/ram using the get method.

Implement a function filterByRam that returns the products if it meets the selected RAM configuration.

Send the filtered products as a JSON response.
<http://localhost:3000/products/filter/ram?ram=8>

*/
function filterByRam(productObj, ram) {
  return productObj.ram == ram;
}
app.get("/products/filter/ram", (req, res) => {
  let ram = parseInt(req.query.ram);
  let filteredProducts = products.filter((product) =>
    filterByRam(product, ram),
  );
  res.json({ products: filteredProducts });
});

/*
Endpoint 5: Filter the products based on the “ROM” option.

Write an Express code snippet to filter products based on the selected ROM option.

Instructions:

Define an endpoint /products/filter/rom using the get method.

Implement a function filterByRom that returns the products if it meets the selected ROM configuration.

Send the filtered products as a JSON response.

API Call:

<http://localhost:3000/products/filter/rom?rom=64>
*/
function filterByRom(productObj, rom) {
  return productObj.rom == rom;
}
app.get("/products/filter/rom", (req, res) => {
  let rom = parseInt(req.query.rom);
  let filteredProducts = products.filter((product) =>
    filterByRom(product, rom),
  );
  res.json({ products: filteredProducts });
});

/*
Endpoint 6: Filter the products based on the “Brand” option.

Write an Express code snippet to filter products based on the selected Brand option.

Instructions:

Define an endpoint /products/filter/brand using the get method.

Implement a function filterByBrand that returns the products for the specified brand category

While matching you convert both the values to lowercase. This will ensure that strings comparisons are case-insensitive

Use the .toLowerCase() string function

Send the filtered products as a JSON response.
*/
function filterByBrand(productObj, brand) {
  return productObj.brand.toLowerCase() === brand.toLowerCase();
}
app.get("/products/filter/brand", (req, res) => {
  let brand = req.query.brand;
  let filteredProducts = products.filter((product) =>
    filterByBrand(product, brand),
  );
  res.json({ products: filteredProducts });
});
/*
Endpoint 7: Filter the products based on the “OS” option.

Write an Express code snippet to filter products based on the selected OS option.

Instructions:

Define an endpoint /products/filter/os using the get method.

Implement a function filterByOs that returns the products for the specified OS configuration.

While matching you convert both the values to lowercase. This will ensure that strings comparisons are case-insensitive

Use the .toLowerCase() string function

Send the filtered products as a JSON response.
*/
function filterByOs(productObj, os) {
  return productObj.os.toLowerCase() === os.toLowerCase();
}
app.get("/products/filter/os", (req, res) => {
  let os = req.query.os;
  let filteredProducts = products.filter((product) => filterByOs(product, os));
  res.json({ products: filteredProducts });
});

/*
Endpoint 8: Filter the products based on the “Price” option.

Write an Express code snippet to filter products based on the selected price option.

Instructions:

Define an endpoint /products/filter/price using the get method.

Implement a function filterByPrice that returns the products for the products less than or equal to the specified price filter.

Send the filtered products as a JSON response.

API Call:

<http://localhost:3000/products/filter/price?price=30000>
*/
function filterByPrice(productObj, price) {
  return productObj.price <= price;
}
app.get("/products/filter/price", (req, res) => {
  let price = parseInt(req.query.price);
  let filteredProducts = products.filter((product) =>
    filterByPrice(product, price),
  );
  res.json({ products: filteredProducts });
});
/*
Endpoint 8: Send original array of products

Write an Express code snippet to send all available products.

Instructions:

Define an endpoint /products using the get method.

Send the products array as a JSON response.
*/
app.get("/products", (req, res) => {
  res.json({ products: products });
});
