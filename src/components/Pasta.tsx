import React from "react";
import { useParams } from "react-router-dom";

import NavBar from "./Navbar";
import SingleProduct from "./SingleProduct";

const Pasta: React.FC = () => {
  const param = useParams();
  return (
    <div className="container">
      <NavBar />
      <h1>Tortlar</h1>
      <SingleProduct name={param.filterKey} />
    </div>
  );
};

export default Pasta;
