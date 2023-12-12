import React, { useEffect, useState } from "react";
import {Product} from "../components/product";
import { Link } from "react-router-dom";
import { useSearchResult } from "../hooks/useSearchResult";
interface Prod {
  id: number;
  thumbnail: string;
  price: number;
  title: string;
}
export function SearchPage() {
  const results = useSearchResult();
  return (
    <ul className="results-list">
      {results.map((product:Prod) => {
        return <Link key={product.id} to={`/item/${product.id}`}><Product productImg={product.thumbnail} productTitle={product.title} productPrice={product.price}/></Link>
      })}
    </ul>
  )
}