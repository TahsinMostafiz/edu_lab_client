import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    const [allCategory, setAllCategory] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/edu_categories')
        .then(res => res.json())
        .then(data => setAllCategory(data))
    }, []);

    return (
        <div >
            <h2 className='font-bold text-2xl mb-4'>Category {allCategory.length}</h2>
            {
                allCategory.map(category => <p key={category.id} className="mb-3">
                    <Link to={`/category/${category.id}`}>{category.name}</Link>
                </p>)
            }
        </div>
    );
};

export default Categories;