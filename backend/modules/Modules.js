const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    subCategory: { type: Schema.Types.ObjectId, ref: 'SubCategory' },
    brand: { type: Schema.Types.ObjectId, ref: 'Brand' }
});

const subCategorySchema = new Schema({
    name: { type: String, required: true },
    category: { type: Schema.Types.ObjectId, ref: 'Category' }
});

const categorySchema = new Schema({
    name: { type: String, required: true },
    brand: { type: Schema.Types.ObjectId, ref: 'Brand' }
});

const brandSchema = new Schema({
    name: { type: String, required: true }
});

const Product = mongoose.model('Product', productSchema);
const SubCategory = mongoose.model('SubCategory', subCategorySchema);
const Category = mongoose.model('Category', categorySchema);
const Brand = mongoose.model('Brand', brandSchema);

module.exports = { Product, SubCategory, Category, Brand };