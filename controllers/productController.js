import slugify from 'slugify';
import productModel from '../models/productModel.js';
import fs from 'fs';

export const createProductController = async (req, res) => {
    try {
        const { name, description, price, category, quantity, shipping } = req.fields;
        const { photo } = req.files;

        // Validation
        switch (true) {
            case !name:
                return res.status(400).send({ error: "Name is required" });
            case !description:
                return res.status(400).send({ error: "Description is required" });
            case !price:
                return res.status(400).send({ error: "Price is required" });
            case !category:
                return res.status(400).send({ error: "Category is required" });
            case !quantity:
                return res.status(400).send({ error: "Quantity is required" });
            case photo && photo.size > 10000000: // 10MB in bytes
                return res.status(400).send({ error: "Photo size should not be greater than 10MB" });
        }

        const slug = slugify(name);
        const products = new productModel({ name, slug, description, price, category, quantity, shipping });

        if (photo) {
            products.photo.data = fs.readFileSync(photo.path);
            products.photo.contentType = photo.type;
        }

        await products.save();

        res.status(201).send({
            success: true,
            message: "Product Created!",
            products
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: "Error in product creation"
        });
    }
};

export const getProductController = async (req, res) => {
    try {
        const products = await productModel.find({}).select("-photo").limit(12).sort({ createdAt: -1 });
        res.status(200).send({
            success: true,
            ProductCount: products.length,
            message: "Product List",
            products
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: "Error while displaying products"
        });
    }
};


export const getSingleProductController = async (req, res) => {
    try {

        const product = await productModel.findOne({ slug: req.params.slug }).select("-photo").populate('category');
        res.status(200).send({
            success: true,
            message: "Single Product List",
            product
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: "Error while displaying single products"
        });

    }
}