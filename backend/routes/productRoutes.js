const express = require('express');
const { Product, SubCategory, Category, Brand } = require('./models');

const router = express.Router();


// Route to get all products
router.get('/products', async (req, res) => {
    try {
        const products = await Product.find().populate('category subCategory brand');
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route to create a new product
router.post('/products', async (req, res) => {
    const product = new Product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        subCategory: req.body.subCategory,
        brand: req.body.brand
    });

    try {
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Route to get all categories
router.get('/categories', async (req, res) => {
    try {
        const categories = await Category.find().populate('brand');
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route to create a new category
router.post('/categories', async (req, res) => {
    const category = new Category({
        name: req.body.name,
        brand: req.body.brand
    });

    try {
        const newCategory = await category.save();
        res.status(201).json(newCategory);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});
// Route to get all subcategories
router.get('/subcategories', async (req, res) => {
    try {
        const subcategories = await SubCategory.find().populate('category');
        res.json(subcategories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route to create a new subcategory
router.post('/subcategories', async (req, res) => {
    const subcategory = new SubCategory({
        name: req.body.name,
        category: req.body.category
    });

    try {
        const newSubCategory = await subcategory.save();
        res.status(201).json(newSubCategory);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Route to get all brands
router.get('/brands', async (req, res) => {
    try {
        const brands = await Brand.find();
        res.json(brands);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route to create a new brand
router.post('/brands', async (req, res) => {
    const brand = new Brand({
        name: req.body.name
    });

    try {
        const newBrand = await brand.save();
        res.status(201).json(newBrand);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
