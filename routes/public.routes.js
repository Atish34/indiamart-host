const { getPublicProducts, getPublicProductDetails, getSerachProducts, getCategoryProducts } = require("../controllers/public.controller")

const router = require("express").Router()

router
    .get("/products", getPublicProducts)
    .post("/search-products", getSerachProducts)
    .post("/category", getCategoryProducts)
    .get("/product-details/:productId", getPublicProductDetails)

module.exports = router