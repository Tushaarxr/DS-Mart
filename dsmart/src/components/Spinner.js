import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Spinner = ({path='login'}) => {
    const [count, setCount] = useState(3);
    const navigate = useNavigate(); // Using useNavigate hook to get navigation function
    const location = useLocation(); // Use useLocation hook to get current location

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevValue => --prevValue); // Correct decrement syntax
        }, 1000);

        count === 0 &&

            navigate(`${path}`, {
                state:location.pathname  // Pass location.pathname as state
            }); // Redirect to '/login'


        return () => clearInterval(interval);
    }, [count, navigate, location,path]);

    return (
        <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}>
            <h1 className='text-center'>Redirecting to you in {count} seconds</h1>
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}

export default Spinner;
