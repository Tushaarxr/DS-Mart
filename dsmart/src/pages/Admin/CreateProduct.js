// import React, { useState, useEffect } from 'react';
// import Layout from '../../components/Layout';
// import AdminMenu from '../../components/AdminMenu';
// import { toast } from "react-toastify";
// import axios from "axios";
// import { Select } from 'antd';
// import { useNavigate } from 'react-router-dom';

// const { Option } = Select;

// const CreateProduct = () => {
//   const navigate = useNavigate();

//   const [categories, setCategories] = useState([]);
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState("");
//   const [quantity, setQuantity] = useState("");
//   const [shipping, setShipping] = useState("0");
//   const [category, setCategory] = useState("");
//   const [photo, setPhoto] = useState("");
//   axios.defaults.baseURL = 'http://localhost:8080';

//   //get all category
//   const getAllCategory = async () => {
//     try {
//       const { data } = await axios.get("/api/v1/category/get-category");
//       if (data.success) {
//         setCategories(data.category);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error("Something went wrong in getting category");
//     }
//   };
//   useEffect(() => {
//     getAllCategory();
//   }, []);

//   //create product function
//   const handleCreate = async (e) => {
//     e.preventDefault();
//     try {
//       const productData = new FormData();
//       productData.append("name", name);
//       productData.append("description", description);
//       productData.append("price", price);
//       productData.append("category", category);
//       productData.append("quantity", quantity); 
//       productData.append("shipping", shipping);
//       productData.append("photo", photo);
//       const { data } = await axios.post("/api/v1/product/create-product", productData);
//       if (data.success) {
//         toast.success("Product created successfully");
//         navigate('/dashboard/admin/products');
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error("Error creating the product");
//     }
//   }

//   return (
//     <Layout title={"Dashboard-Create Product"}>
//       <div className="row">
//         <div className="col-md-3">
//           <AdminMenu />
//         </div>
//         <div className="col-md-9 text-center my-3">
//           <h1>Create Product</h1>
//           <div className="m-1 w-75">
//             <Select placeholder="Select a Category" size='large' showSearch className='form-select mb-3' onChange={(value) => { setCategory(value) }}>
//               {categories.map(c => (
//                 <Option key={c._id} value={c._id}>{c.name}</Option>
//               ))}
//             </Select>
//             <div className='mb-3'>
//               <label className='btn btn-outline-secondary '>
//                 {photo ? photo.name : "Upload Image"}
//                 <input type='file' name='photo' accept='images/*' onChange={(e) => setPhoto(e.target.files[0])} hidden />
//               </label>
//             </div>
//             {/* image preview */}
//             <div className="mb-3">
//               {photo && (
//                 <div className="text-center">
//                   <img src={URL.createObjectURL(photo)} alt='product_image' height={"200px"} className='img img-responsive'></img>
//                 </div>
//               )}
//             </div>
//             <div className="mb-3">
//               <input type='text'
//                 value={name}
//                 placeholder='Write the product name'
//                 onChange={(e) => setName(e.target.value)}
//                 className='form-control'></input>
//             </div>
//             <div className="mb-3">
//               <textarea
//                 value={description}
//                 placeholder='Write the product description'
//                 onChange={(e) => setDescription(e.target.value)}
//                 className='form-control'></textarea>
//             </div>
//             <div className="mb-3">
//               <input type='number'
//                 value={price}
//                 placeholder='Enter the product price'
//                 onChange={(e) => setPrice(e.target.value)}
//                 className='form-control'></input>
//             </div>
//             <div className="mb-3">
//               <input type='number'
//                 value={quantity}
//                 placeholder='Enter the product quantity'
//                 onChange={(e) => setQuantity(e.target.value)}
//                 className='form-control'></input>
//             </div>
//             <div className="mb-3">
//               <Select
//                 value={shipping}
//                 size='large'
//                 showSearch
//                 placeholder='Select Shipping'
//                 onChange={(value) => setShipping(value)}
//                 className='form-control'>
//                 <Option value="0">NO</Option>
//                 <Option value="1">YES</Option>
//               </Select>
//             </div>
//             <div className="mb-3">
//               <button className='btn btn-primary' onClick={handleCreate}>CREATE PRODUCT</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   )
// }

// export default CreateProduct;



import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import AdminMenu from '../../components/AdminMenu';
import { toast } from "react-toastify";
import axios from "axios";
import { Select } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Option } = Select;
axios.defaults.baseURL = 'http://localhost:8080';

const CreateProduct = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shipping, setShipping] = useState("");
  const [photo, setPhoto] = useState("");

  //get all category
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something wwent wrong in getting catgeory");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  //create product function
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("quantity", quantity);
      productData.append("photo", photo);
      productData.append("category", category);
      const { data } = axios.post(
        "/api/v1/product/create-product",
        productData
      );
      if (data?.success) {
        toast.error(data?.message);
      } else {
        toast.success("Product Created Successfully");
        navigate("/dashboard/admin/products");
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  return (
    <Layout title={"Dashboard - Create Product"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>Create Product</h1>
            <div className="m-1 w-75">
              <Select
                bordered={false}
                placeholder="Select a category"
                size="large"
                showSearch
                className="form-select mb-3"
                onChange={(value) => {
                  setCategory(value);
                }}
              >
                {categories?.map((c) => (
                  <Option key={c._id} value={c._id}>
                    {c.name}
                  </Option>
                ))}
              </Select>
              <div className="mb-3">
                <label className="btn btn-outline-secondary col-md-12">
                  {photo ? photo.name : "Upload Photo"}
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    onChange={(e) => setPhoto(e.target.files[0])}
                    hidden
                  />
                </label>
              </div>
              <div className="mb-3">
                {photo && (
                  <div className="text-center">
                    <img
                      src={URL.createObjectURL(photo)}
                      alt="product_photo"
                      height={"200px"}
                      className="img img-responsive"
                    />
                  </div>
                )}
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={name}
                  placeholder="write a name"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <textarea
                  type="text"
                  value={description}
                  placeholder="write a description"
                  className="form-control"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <input
                  type="number"
                  value={price}
                  placeholder="write a Price"
                  className="form-control"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  value={quantity}
                  placeholder="write a quantity"
                  className="form-control"
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <Select
                  bordered={false}
                  placeholder="Select Shipping "
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setShipping(value);
                  }}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>
              <div className="mb-3">
                <button className="btn btn-primary" onClick={handleCreate}>
                  CREATE PRODUCT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateProduct;