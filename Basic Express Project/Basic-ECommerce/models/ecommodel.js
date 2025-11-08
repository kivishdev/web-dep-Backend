const mongoose = require("mongoose");

mongoose.connect(`mongodb://localhost:27017/Ecommerce`);

const ecomSchema = mongoose.Schema ({
    ProdId: Number,
    Prodname: String,
    ProdPrice: Number,
    title: String
})

module.exports = mongoose.model("Prod", ecomSchema)