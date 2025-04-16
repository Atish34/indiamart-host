const Product = require("../models/Product")

exports.getPublicProducts = async (req, res) => {
    const result = await Product.find()
    res.json({ message: "product fetch success", result })
}
exports.getPublicProductDetails = async (req, res) => {
    const result = await Product.findById(req.params.productId)
    res.json({ message: "product details fetch success", result })
}

exports.getSerachProducts = async(req,res)=>{
    const {term} = req.body
    const result = await Product.find({name:term})
    
    res.json({ message: "product fetch success", result })
  }

exports.getCategoryProducts = async(req,res)=>{
    const {category} = req.body
    const result = await Product.find({category:category})
    
    res.json({ message: "product fetch success", result })
  }
  