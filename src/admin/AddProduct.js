import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import {Link} from 'react-router-dom';
import { isAuthenticated } from "../auth";
import {createProduct} from "./apiAdmin";

const AddProduct = () => {

  const {user, token} = isAuthenticated();

  return (
    <Layout title="Add a new product" description={`Hello, ${user.name}! `}>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          ...
        </div>
      </div>
    </Layout>
  );
}

export default AddProduct;