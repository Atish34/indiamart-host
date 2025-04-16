const Product = require("../models/Product");
const path = require("path");
const { upload } = require("../utils/upload");
const Order = require("../models/Order");
const { sendEmail } = require("../utils/email");
const Customer = require("../models/Customer");
const cloudinary = require("../utils/cloudinary");


exports.addProduct = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ message: "unable to upload" });
    }
    if (req.files) {
      const allImages = [];
      const heros = [];
      for (const item of req.files) {
        allImages.push(cloudinary.uploader.upload(item.path));
      }
      const data = await Promise.all(allImages);
      for (const item of data) {
        heros.push(item.secure_url);
      }
      await Product.create({ ...req.body, hero: heros });
      res.json({ message: "product add success" });
    } else {
      res.status(400).json({ message: "hero image is required" });
    }
  });
};

exports.getProducts = async (req, res) => {
  const result = await Product.find();
  res.json({ message: "product fetch success", result });
};

exports.updateProducts = async (req, res) => {
  upload(req, res, async (err) => {
    try {
      console.log(req.body);

      const allImages = [];
      if (req.files && req.files.length > 0) {
        for (const item of req.files) {
          const { secure_url } = await cloudinary.uploader.upload(item.path);
          allImages.push(secure_url);
        }
      }
      const oldProduct = await Product.findById(req.params.productId);
      if (req.body.remove) {
        const result = oldProduct.hero.filter(
          (item) => !req.body.remove.includes(item)
        );
        oldProduct.hero = result;
        if (typeof req.body.remove === "string") {
          await cloudinary.uploader.destroy(path.basename(req.body.remove, path.extname(req.body.remove)));
        } else {
          for (const item of req.body.remove) {
            await cloudinary.uploader.destroy(path.basename(item, path.extname(item)));
          }
        }
      }
      await Product.findByIdAndUpdate(req.params.productId, {
        ...req.body,
        hero: [...oldProduct.hero, ...allImages],
      });
      res.json({ message: "product update success" });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "something went wrong" });
    }
  });
};

exports.deleteProducts = async (req, res) => {
  const result = await Product.findById(req.params.productId);
  for (const item of result.hero) {
    await cloudinary.uploader.destroy(path.basename(item, path.extname(item)));
  }
  await Product.findByIdAndDelete(req.params.productId);
  res.json({ message: "product delete success" });
};

exports.fetchAdminOrders = async (req, res) => {
  const total = await Order.countDocuments();
  const { skip, limit } = req.query;
  const result = await Order.find()
    .skip(skip)
    .limit(limit)
    .populate("customer", " _id name")
    .populate("products", "-__v");

  res.json({ message: "order fetch success", result, total });
};

exports.adminUpdateOrderStatus = async (req, res) => {
  await Order.findByIdAndUpdate(req.params.oid, { status: req.body.status });
  const x = await Order.findById(req.params.oid);
  const result = await Customer.findById(x.customer);
  if (req.body.status !== "placed") {
    await sendEmail({
      to: result.email,
      subject: "our Order Status Has Been Updated!",
      message: `Your Order Status: Now ${req.body.status}`,
    });
  }
  res.json({ message: "order status update success" });
};

exports.adminCustomerFetch = async (req, res) => {
  try {
    const total = await Customer.countDocuments() 
    const { skip, limit } = req.query;
    const result = await Customer
    .find()
    .skip(skip)
    .limit(limit)
    res.json({ message: "customer fetch success", result, total });
  } catch (error) {
    console.log(error);
    res.json({ message: "unable to fetch" });
  }
};

exports.adminBlockUnblockCustomer = async (req, res) => {
  try {
    await Customer.findByIdAndUpdate(req.params.cid, {isActive: req.body.isActive})
    res.json({ message: "customer blocked success" });
  } catch (error) {
    console.log(error);
    res.json({ message: "unable to block customer" });
  }
};
