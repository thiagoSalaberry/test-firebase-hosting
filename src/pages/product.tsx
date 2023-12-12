import React, {useEffect, useState} from "react";
import {Product} from "../components/product";
import { Link, useParams } from "react-router-dom";
interface Prod {
  id: number;
  thumbnail: string;
  price: number;
  title: string;
}
interface ProdResult {
  price: number;
  title: string;
  pictures: [{
    id: string,
    max_size: string,
    quality: string,
    secure_url: string,
    size: string;
    url: string;
  }];
  permalink: string;
}
export function ProductPage() {
  const params = useParams();
  const query = params.id!;
  const [product, setProduct] = useState<ProdResult>();
  async function pullResult(q:string) {
    const response = await fetch(`https://api.mercadolibre.com/items/${q}`)
    const data = await response.json();
    setProduct(data)
  }
  useEffect(()=>{
    pullResult(query);
  }, [params])
  return (
    <div className="product-card">
      <div className="card-thumbnails-container">
          {product?.pictures.map((picture) => {
            return (
              <div key={picture.id} className="card-img-container">
                <img src={picture.secure_url} className="card-img"/>
              </div>
            )
          })}
      </div>
      <h2 className="card-title">{product?.title}</h2>
      <p className="card-price">{product?.price}</p>
      <a href={product?.permalink} className="card-link" target="_blank">más info...</a>
    </div>
  )
}