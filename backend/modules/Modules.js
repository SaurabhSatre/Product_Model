// ecommerceModels.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define Product Schema
const productSchema = new Schema({
    name: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    subCategory: { type: Schema.Types.ObjectId, ref: 'SubCategory' },
    brand: { type: Schema.Types.ObjectId, ref: 'Brand' }
    // other product attributes
});

// Define SubCategory Schema
const subCategorySchema = new Schema({
    name: { type: String, required: true },
    category: { type: Schema.Types.ObjectId, ref: 'Category' }
    // other sub-category attributes
});

// Define Category Schema
const categorySchema = new Schema({
    name: { type: String, required: true },
    brand: { type: Schema.Types.ObjectId, ref: 'Brand' }
    // other category attributes
});

// Define Brand Schema
const brandSchema = new Schema({
    name: { type: String, required: true }
    // other brand attributes
});

// Create models
const Product = mongoose.model('Product', productSchema);
const SubCategory = mongoose.model('SubCategory', subCategorySchema);
const Category = mongoose.model('Category', categorySchema);
const Brand = mongoose.model('Brand', brandSchema);

module.exports = { Product, SubCategory, Category, Brand };
