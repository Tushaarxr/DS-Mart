import categoryModel from "../models/categoryModel.js";
import slugify from "slugify"; // Add - between  words and lowercase all letters

export const createCategoryController = async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) {
            return res.status(401).send({ message: " Category Name is required" })
        }
        const existingCategory = await categoryModel.findOne({ name });
        if (existingCategory) {
            return res.status(200).send({
                success: true,
                message: "Category Already Exist"
            })
        }
        const category = await new categoryModel({ name, slug: slugify(name) }).save();

        res.status(201).send({
            success: true,
            message: "New Cateogry Created",
            category
        });



    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error in Category"
        })

    }

}

export const updateCategoryController = async (req, res) => {
    try {
        const { name } = req.body;
        const { id } = req.params; //geting the id from the url we use params
        const category = await categoryModel.findByIdAndUpdate(id, { name, slug: slugify(name) }, { new: true });
        res.status(200).send({
            sucess: true,
            message: "Category updated",
            category

        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            sucess: false,
            error,
            message: "Server Error while updating Category"
        })

    }

}

export const categoryController = async (req, res) => {
    try {
        const category = await categoryModel.find({})
        res.status(200).send({
            sucess: true,
            message: "All Category List",
            category
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            sucess: false,
            error,
            message: "Server side error while displaying category"
        })

    }
}

export const singleCategoryController = async (req, res) => {
    try {
        const category = await categoryModel.findOne({ slug: req.params.slug })
        res.status(200).send({
            sucess: true,
            message: "Single Category",
            category

        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            sucess: false,
            error,
            message: "Server side error while displaying category"
        })


    }

}

export const deleteCategoryController = async (req, res) => {
    try {
        const { id } = req.params;
        await categoryModel.findByIdAndDelete(id);
        res.status(200).send({
            sucess: true,
            message: "category Deleted",


        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            sucess: false,
            error,
            message: "Server side error while deleting category"
        })

    }
}