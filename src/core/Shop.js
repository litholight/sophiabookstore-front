import React, {useState, useEffect} from 'react';
import Layout from './Layout'
import Card from './Card';
import {getCategories} from './apiCore';
import Checkbox from './Checkbox'

const Shop = () => {
  const [categories, setCategories] = useState([])
  const [error, setError] = useState(false)

   // load categories and set form data
   const init = () => {
    getCategories().then(data => {
      if(data.error) {
        setError(data.error)
      } else {
        setCategories(data)
      }
    });
  };

  useEffect(() => {
    init();
  }, []);

  const handleFilters = (filters, filterBy) => {
    console.log("SHOP", filters, filterBy);
  }

  return (
    <Layout title="Sophia's Bookstore" description="Used books at a great price!" className="container-fluid">
      <div className="row">
        <div className="col-4">
          <h4>Filter by categories</h4>
          <ul>
            <Checkbox categories={categories} handleFilters={filters => handleFilters(filters, 'category ')}/>
          </ul>
        </div>
        <div className="col-8">right</div>
      </div>
    </Layout>
  )

}

export default Shop;