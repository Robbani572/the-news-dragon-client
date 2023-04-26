import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <div>
            <h3>Left Nav</h3>
            <div className='mt-4'>
            {
                categories.map(category => <p
                    key={category.id}
                >
                    <Link className='text-decoration-none ps-4 pt-2 text-secondary fw-semibold'>{category.name}</Link>
                </p>)
            }
            </div>
        </div>
    );
};

export default LeftNav;