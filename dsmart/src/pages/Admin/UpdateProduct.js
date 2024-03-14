import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import AdminMenu from '../../components/AdminMenu';
import { toast } from "react-toastify";
import axios from "axios";
import { Select } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
const { Option } = Select;

const UpdateProduct = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shipping, setShipping] = useState("");
  const [category, setCategory] = useState("");
  const [photo, setPhoto] = useState("");
  const [id, setId] = useState("");
  axios.defaults.baseURL = 'http://localhost:8080';


  //get single product
  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(`api/v1/product/single-product/${params.slug}`);
      setName(data.product.name)
      setDescription(data.product.description)
      setPrice(data.product.price)
      setQuantity(data.product.quantity)
      setShipping(data.product.shipping)
      setCategory(data.product.category._id)
      setId(data.product._id)

    } catch (error) {
      console.log('Error', error);

    }

  }
  useEffect(() => {
    getSingleProduct();
    // eslint-disable-next-line
  }, []);

  //get all category
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data.success) {
        setCategories(data.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in getting category");
    }
  };
  useEffect(() => {
    getAllCategory();
  }, []);

  //create product function
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("category", category);
      productData.append("quantity", quantity);
      productData.append("shipping", shipping);
      photo && productData.append("photo", photo);
      const { data } = await axios.put(`/api/v1/product/update-product/${id}`, productData);
      if (data.success) {
        toast.success("Product Updated successfully");
        navigate('/dashboard/admin/products');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error Updating the product");
    }
  };

  //delete a product

  const handleDelete = async () => {
    try {
      const confirmed = window.confirm("Are you sure you want to delete this product?");
      if (!confirmed) return;
  
      const { data } = await axios.delete(`/api/v1/product/delete-product/${id}`);
      if (data.success) {
        toast.success("Product deleted successfully");
        navigate('/dashboard/admin/products'); // Assuming this is the correct route
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error deleting the product");
    }
  };
  

  return (
    <Layout title={"Dashboard-Create Product"}>
      <div className="row">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9 text-center my-3">
          <h1>Update Product</h1>
          <div className="m-1 w-75">
            <Select placeholder="Select a Category" size='large' showSearch className='form-select mb-3' onChange={(value) => { setCategory(value) }} value={category}>
              {categories.map(c => (
                <Option key={c._id} value={c._id}>{c.name}</Option>
              ))}
            </Select>
            <div className='mb-3'>
              <label className='btn btn-outline-secondary '>
                {photo ? photo.name : "Upload Image"}
                <input type='file' name='photo' accept='images/*' onChange={(e) => setPhoto(e.target.files[0])} hidden />
              </label>
            </div>
            {/* image preview */}
            <div className="mb-3">
              {photo ? (
              <div className="text-center">
                <img src={URL.createObjectURL(photo)} alt='product_image' height={"200px"} className='img img-responsive'></img>
              </div>
              ):(
              <div className="text-center">
                <img src={`/api/v1/product/product-photo/${id}`} alt='product_image' height={"200px"} className='img img-responsive'></img>
              </div>

              )}
            </div>
            <div className="mb-3">
              <input type='text'
                value={name}
                placeholder='Write the product name'
                onChange={(e) => setName(e.target.value)}
                className='form-control'></input>
            </div>
            <div className="mb-3">
              <textarea
                value={description}
                placeholder='Write the product description'
                onChange={(e) => setDescription(e.target.value)}
                className='form-control'></textarea>
            </div>
            <div className="mb-3">
              <input type='number'
                value={price}
                placeholder='Enter the product price'
                onChange={(e) => setPrice(e.target.value)}
                className='form-control'></input>
            </div>
            <div className="mb-3">
              <input type='number'
                value={quantity}
                placeholder='Enter the product quantity'
                onChange={(e) => setQuantity(e.target.value)}
                className='form-control'></input>
            </div>
            <div className="mb-3">
              <Select

                size='large'
                showSearch
                placeholder='Select Shipping'
                onChange={(value) => setShipping(value)}
                className='form-control'
                value={shipping ? "YES" : "NO"}>
                <Option value="NO">NO</Option>
                <Option value="YES">YES</Option>
              </Select>
            </div>
            <div className="mb-3 w-25">
              <button className='btn btn-primary' onClick={handleUpdate}>UPDATE</button>
            </div>
            <div className="mb-3 w-25">
              <button className='btn btn-danger' onClick={handleDelete}>DELETE</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>

  )
}

export default UpdateProduct
