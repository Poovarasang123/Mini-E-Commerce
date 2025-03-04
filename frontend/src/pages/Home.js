import {Fragment, useEffect, useState} from 'react';
import ProductCard from '../components/ProductCard';
import { useSearchParams } from 'react-router-dom';
export default function Home(){

   const [products,setProducts] = useState([]); // usestate for storing the api data in product
   const [searchParams, setSearchParams] = useSearchParams(); // search params used to handle the parameters entered in the search box
   // useeffect is a react hook to fetch the api 
   // products is having a product array using map we can access that.
   useEffect(() => { 
      fetch(process.env.REACT_APP_API_URL+'/products?'+searchParams)
      .then(res => res.json()) 
      .then(res => setProducts(res.products))
   },[searchParams]);
    return <Fragment>
               <h1 id="products_heading">Latest Products</h1>
               <section id="products" className="container mt-5">
                  <div className="row">
                     {products.map(product => <ProductCard product={product}/>)};  
                  </div> 
               </section>
            </Fragment>        
}