import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Category = () => {

    const {id} = useParams();
    const categoryNews = useLoaderData()

    console.log(categoryNews)


    return (
        <div>
            <h3>This is the category no: {categoryNews.length}</h3>
        </div>
    );
};

export default Category;