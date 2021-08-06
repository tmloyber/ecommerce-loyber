import React, {useState, useEffect} from 'react';
import Category from '../../components/Category/Category';
import {Link} from 'react-router-dom';
import {database} from '../../firebase'; 

function CategoryListContainer({comingFromMenu, handleCategoryChange}) {
    const [categories, setCategories] = useState([]);
    let categoryCollection = database.collection("categories");

    useEffect(() => {
        (async() => {
            const itemsCategories = [];
            const response = await categoryCollection.get();
            response.docs.forEach((doc) => {
                itemsCategories.push({...doc.data(), id: doc.id});
            });
            setCategories(itemsCategories);
        })();
    }, []);

    if (comingFromMenu) {
        return(
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {categories.map(category => <Link to={{pathname: `/category/${category.name}`, state: category.id}} key={category.id} id={category.name} className="dropdown-item" onClick={handleCategoryChange}>{category.name.toUpperCase()}</Link>)}
            </ul>
        )
    } else {
        return (
            <section className="categorias">
                <div className="row d-flex justify-content-center">
                    {categories.map(category => <Category key={category.id} category={category} /> )}
                </div>
            </section>
        )
    }
}

export default CategoryListContainer;
