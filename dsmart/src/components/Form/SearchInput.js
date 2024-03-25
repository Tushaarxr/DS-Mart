import React from 'react';
import { useSearch } from '../../context/Search';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const SearchInput = () => {
    const navigate = useNavigate(); // Move useNavigate inside the component function
    const [values, setValues] = useSearch();

    axios.defaults.baseURL = 'http://localhost:8080';

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.get(`/api/v1/product/search/${values.keyword}`);
            setValues({ ...values, results: data });
            navigate('/search');
        } catch (error) {
            // Handle error
        }
    };

    return (
        <div>
            <form className="searchbar d-flex position" role="search" onSubmit={handleSubmit}>
                <input
                    className="form-control me-3"
                    type="search"
                    placeholder="Search for Products.."
                    aria-label="Search"
                    value={values.keyword}
                    onChange={(e) => setValues({ ...values, keyword: e.target.value })}
                />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    );
};

export default SearchInput;
