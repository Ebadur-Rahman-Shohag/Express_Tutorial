const express = require("express");
const { products } = require("./data");

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1> <a href='/api/products'>Products</a>");
});

app.get("/api/products", (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product;
        return { id, name, image };
    });
    res.json(newProducts);
});

// params example
app.get("/api/products/:productID", (req, res) => {
    console.log(req.params);

    const { productID } = req.params;

    const singleProduct = products.find(
        (product) => product.id === Number(productID)
    );

    if (!singleProduct) {
        return res.status(404).send("Product Does Not Exist");
    } else {
        return res.send(singleProduct);
    }
});

//more complex params example
app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
    console.log(req.params);
    res.send("hello world");
});

//query string example
app.get("/api/v1/query", (req, res) => {
    console.log(req.query);

    const { search, limit } = req.query;

    let sortedProducts = [...products];

    if (search) {
        sortedProducts = sortedProducts.filter((product) =>
            product.name.startsWith(search)
        );
    }

    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }

    if (sortedProducts.length < 1) {
        // return res.status(200).send('no products matched your search');
        return res.status(200).json({ success: true, data: [] });
    }

    res.status(200).json(sortedProducts);
});

// app.all("*", (req, res) => {
//     res.status(404).send("There is an error...");
// });

app.listen(5000, () => {
    console.log("Server is listening to port 5000");
});
