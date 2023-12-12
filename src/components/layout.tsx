import React, {useState} from "react";
import { Outlet } from "react-router-dom";
import {SearchForm} from "./search-form";
import { Product } from "./product";
interface Prod {
  id: number;
  price: number;
  title: string;
  thumbnail: string;
}
export function Layout() {
  const handleSearch = async(search:string) => {
    try {
        const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${search} nano&limit=5`);
        const data = await response.json();
        this.setState({results: data.results})
    } catch(error) {
        console.error(error)
    }
}
  return (
    <div>
        <SearchForm />
        <Outlet></Outlet>
    </div>
  )
}