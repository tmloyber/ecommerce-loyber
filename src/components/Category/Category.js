import React from 'react';
import './Category.css';
import {Link} from 'react-router-dom';

function Category({category}) {
    return (
        <Link to={{pathname: `/category/${category.name}`, state: category.id}} className="col-md-4 col-12 cat">
            <div>
                <div className="overlay"></div>
                <img src={category.imageUrl} alt={category.name} />
            </div>
            <h5>{category.name}</h5>
        </Link>
    )
}

export default Category;
