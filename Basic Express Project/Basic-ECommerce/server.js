const express = require("express");
const app = express();
const ecomModel = require("./models/ecommodel");
const axios = require("axios");
const { model } = require("mongoose");

app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");


app.get('/', async (req,res) => {
    try{
        // 1. API ko call karo aur data ka intezaar (await) karo
       let apiResponse = await axios.get('https://fakestoreapi.com/products');

    //    2. API se jo data (products) mila, usse ek variable me rakho
       let allProducts = apiResponse.data;

       let cartItems = ecomModel.find();
       res.render("index", {products: allProducts,
        cartItemCount: cartItems.length
       });
    }
    catch(err){
        console.log("API se data laane me error:", err);
        res.send("Error While Fetcjing try after some time")
    }
})

// server.js

app.get('/search', async (req, res) => {
    
    try {
        // --- YEH LINE BADLI HAI ---
        // Humne (req.query.query || '') add kiya hai
        // Iska matlab hai: "ya toh req.query.query lo, aur agar woh undefined hai, toh '' (empty string) le lo"
        let searchQuery = (req.query.query || '').toLowerCase(); 
        // -------------------------

        // 2. API se saare products manga lo
        let apiResponse = await axios.get('https://fakestoreapi.com/products');
        let allProducts = apiResponse.data;

        // 3. Ab 'filter' ka jaadu dekho
        let filteredProducts = allProducts.filter(product => {
            return product.title.toLowerCase().includes(searchQuery);
        });

        // 4. Cart ka count
        let cartItems = await ecomModel.find();
        
        // 5. 'index.ejs' page ko render karo
        res.render('index', {
            products: filteredProducts,
            cartItemCount: cartItems.length
        });

    } catch (err) {
        console.log("Search me error:", err);
        res.send("Search nahi chal raha.");
    }
});


app.post('/add-to-cart',async (req,res) => {
try {
    const {ProdId, Prodname, ProdPrice} = req.body

        let newCartItem = await ecomModel.create({
            ProdId: ProdId,
            Prodname: Prodname,
            ProdPrice: ProdPrice,
        });
        console.log("Item saved:", newCartItem);
        res.redirect('/')
    }
catch(err) {
    console.error("Error while saving data in DB", err);
    res.send("Error Saving Item")
}
})

app.get('/cart', async (req,res) => {
try {
    let CartItems = await ecomModel.find().exec();
    res.json(CartItems)
    console.log('Item Fetched and shown on the Cart Page', CartItems);
    res.render("cart", {CartProducts: CartItems});
}
catch(err) {
    console.log(`Error While Fetchig ${err}`);
    res.send("Error Fetching Items");
}
})

app.listen(3000);