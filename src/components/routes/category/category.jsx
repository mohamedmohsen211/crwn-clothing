import { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectCategoriesMap , selectCategoriesIsLoading } from '../../../store/categories/category.selector';

import ProductCard from '../../product-card/product-card';
import Spinner from '../../spinner/spinner';

import './category.styles.scss'

const Category = () => {
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [categoriesMap, category])
    
    return (
        <Fragment>
            <h2 className='category-title'>{category.toUpperCase()}</h2>
            {
                isLoading ? <Spinner /> :
                    <div className='category-container'>
                        {products && products.map((product) => <ProductCard key={product.id} product={product} />)}
                    </div>
            }
            
        </Fragment>
    );
}
export default Category;